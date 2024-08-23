import React, { useState, useEffect } from 'react';
import handleSetResource from '../../services/handleSetResourceConfigDesk';
import guid from '../../utils/guid';
import { BlipLoading } from '../BlipLoading';
import { NotificationContainer } from 'react-notifications';
import { showToast } from '../../api/commomService'
import createUser from '../../services/handleSetAuth';
import login from '../../services/handleGetLogin';
import resourceServices from '../../services/handleSetResource'
import { BdsSelectChips, BdsInputEditable, BdsCheckbox, BdsInput, BdsTypo } from 'blip-ds/dist/blip-ds-react';
import Select from '../Select/index'
import getStateBot from '../../services/getStateBot';
import getFlowId from '../../services/getFlowId';
import getMessageTemplate from '../../services/getMessageTemplate';
import configSystemService from '../../services/createSystem';
import getSystemServices from '../../services/getSystem';
import addFlowInSubBot from '../../services/addFlowInSubBot';
import getTags from '../../services/getTags';
import createFlowByTags from '../../services/createFlowByTags';

function PluginDesk({ keyTarget, tenantId, accessKey, shortName, nameSpace }) {



  const [nameSpaceState, setNameSpaceState] = useState(nameSpace);

  const [templates, setTemplates] = useState([]);
  const [dataSubBot, setDataSubBot] = useState([]);
  const [stateId, setStateId] = useState('');
  const [flowId, setFlowId] = useState('');
  const [loading, setLoading] = useState(false);
  const [subBots, setSubBots] = useState(JSON.parse(localStorage.getItem('details')));
  const [templateSubBot, setTemplateSubBot] = useState('Selecione um bot');
  const [identity, setIdentity] = useState('');
  const [dataFlowId, setDataFlowId] = useState([]);
  const [templateSubBotFlowId, setTemplateSubBotFlowId] = useState('Selecione um bloco');
  const [message, setMessage] = useState([]);
  const [extension, setExtension] = useState(false);
  const [tokenApi, setTokenApi] = useState("Token ainda não gerado!");
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputPhoneLabel, setInputPhoneLabel] = useState("Telefone do cliente");
  const [instalationFlow, setInstalationFlow] = useState(false);


  const [tokenBot, setTokenBot] = useState('');
  const [editableName, setEditableName] = useState('');
  const [payloadTags, setPayloadTags] = useState("");
  const [returnBlocksTrigger, setReturnBlocksTrigger] = useState('');
  const [hasTag, setHasTag] = useState(false)
  const [templatesOrigin, setTemplatesOrigin] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);
  const [inputList, setInputList] = useState([]);
  const [templateName, setTemplateName] = useState("")


  useEffect(async () => {

    const contract = localStorage.getItem('plugin-tenant-id')
    const resultGetApp = await getSystemServices(contract, 'deskReply');
    const key = localStorage.getItem('plugin-deskReply')

    if (resultGetApp.data.length > 0) {
      setTokenApi(resultGetApp.data[0]['_id'])
      localStorage.setItem('token-api-desk-replay', resultGetApp.data[0]['_id'])
      setExtension(true)
    }

    fnAuxSubBots()
    fnAuxNameSpace()
    fnAuxTemplates()


  }, []);

  const fnAuxTemplates = async () => {

    const arrayTemplates = [];
    const routerKey = localStorage.getItem('plugin-deskReply')
    const response = await getMessageTemplate(guid(), routerKey);

    const templates = response.data.resource.data.filter((t) => t.name && t.status === 'APPROVED' && t.components[0].format !== 'IMAGE');


    templates.map((template) => {
      arrayTemplates.push({
        id: template.name,
        value: template.name,
        label: template.name,
        selected: false
      })
    });


    setMessage(arrayTemplates);
    setTemplatesOrigin(templates)

  }


  const fnAuxSubBots = () => {


    const arraySubBots = [];
    subBots.filter((bots) => { if (bots.flowId !== '') arraySubBots.push({ label: bots.longName, value: bots.longName }); })

    const template_list = arraySubBots.map((template) => ({
      id: template.label,
      value: template.value,
      label: template.label,
      selected: false
    }));
    setTemplates(template_list);
    setDataSubBot(arraySubBots);
  }

  const fnAuxNameSpace = () => {

    setTimeout(() => {

      setNameSpaceState(nameSpace)

    }, 7000)
  }



  const handleRecordResource = async (flag) => {

    const config = {
      "contract": !tenantId ? shortName : tenantId,
      "router": localStorage.getItem('infoRouter'),
      "routerKey": localStorage.getItem('plugin-deskReply'),
      "headers": {
        "identifier": shortName,
        "accessKey": accessKey
      },
      "namespace": localStorage.getItem("message_template_namespace"),
      "identity": identity,
      "templateName": templateName,
      "appKey": tokenBot,
      "time": 24,
      "operator":">=",
      "app": "deskReply"
    }
    const name = !tenantId ? shortName : tenantId;

    createResource(config, name, flag);

  }


  const createResource = async (config, name, flag) => {

    const payloadSystem = {
      "contract": name,
      "system": [
        {
          "app": "deskReply",
          "url": "",
          "index": "",
          "label": "",
          "icon": ""
        }
      ]
    }

    const resultCreateSytem = await configSystemService(payloadSystem);

    const result = await handleSetResource(config, flag)

    if (result.status === 200 || result.status === 202) {

      showMessage('Extensão atualizada com sucesso', 'success')

    } else {
      showMessage('Erro ao atualizar a extensão', 'danger')

    }

  }


  const handleSetEventSubBot = async (event) => {

    const nameSubBot = event;
    setTemplateSubBot(event);

    const { identifier, accessKey, identity } = subBots.filter((e) => e.longName === nameSubBot)[0];

    const KEYSUB = 'Key ' + btoa(`${identifier}:` + atob(accessKey));

    setTokenBot(KEYSUB)


    const KEY = localStorage.getItem('plugin-share-sreen')
    const states = await getStateBot(KEY, identifier, guid());

    const resource = await getFlowId(KEY, identifier, guid());

    const flowID = resource.data.resource;
    const statesItems = states.data.resource.items;

    let arrayStates = [];

    for (const iterator of statesItems) {

      arrayStates.push({
        id: iterator.id,
        value: iterator.name,
        label: iterator.name,
        selected: false
      })

    }

    setDataFlowId(arrayStates);
    setFlowId(flowID);
    setIdentity(identity);
    setNameSpaceState(nameSpace)
  }


  function showMessage(msg, type, status) {

    setTimeout(() => {
      showToast({
        type: type,
        message: msg
      })
      setLoading(false);
    }, 100);
  }

  const handleInputChange = (e, index, data) => {

    setTemplateName(e)
  };


  return (
    <div className="">

      <div className="mt-2 mb-2">
        <div className="row">
          <div className="col-4">
            <Select
              name="template"
              label="Selecione o seu bot de atendimento"
              placeholder="Selecione um chatbot"
              multiple={false}
              searchable={true}
              options={templates}
              selected={templates}
              onChange={($event) => handleSetEventSubBot($event)}
            />
          </div>
        </div>

        {identity && <>
          {/* <div className="row">
            <div className="col-3">

              <Select
                icon="megaphone"
                label="Template que será enviado"
                name="template"
                placeholder="Selecione um template/Modelo de mensagem"
                searchable={true}
                multiple={false}
                options={message}
                selected={message}
                onChange={($event) => handleInputChange($event)}
              />
            </div>

          </div> */}


          {!extension && <bds-button icon="builder-publish-bot" style={{ display: 'flex', justifyContent: 'start' }} size="short" onClick={() => handleRecordResource(false)} >Ativar Extensão</bds-button>}
          {extension && <bds-button icon="refresh" style={{ display: 'flex', justifyContent: 'start' }} size="short" onClick={() => handleRecordResource(true)} >Atualizar</bds-button>}


        </>}

      </div>

      <NotificationContainer />

      <br></br>
      <div className="">

        <h1></h1>
        <hr></hr>

        <span>OBS: Clique no link abaixo para instalar o plugin na loja do Google Chrome para utilizar o BlipDesk</span><br />

        <span ng-if="tab.tabHref">
          <a href="https://chromewebstore.google.com/detail/automensagem/decldjnacemjaomklnlfhnolbkfncnod?authuser=0&hl=pt-BR" class="tab-href" target="_blank" style={{ color: 'black', textDecoration: 'nome' }}>Clique aqui! <i class="icon-external-link icon icon-xss mb2"></i></a>
        </span>
      </div>

    </div>

  );

}


export default PluginDesk;