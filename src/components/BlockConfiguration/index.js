import React, { useState, useEffect } from 'react';
import handleSetResource from '../../services/handleSetResourceConfigDesk';
import guid from '../../utils/guid';
import { BlipLoading } from '../BlipLoading';
import { NotificationContainer } from 'react-notifications';
import { showToast } from '../../api/commomService'
import createUser from '../../services/handleSetAuth';
import login from '../../services/handleGetLogin';
import resourceServices from '../../services/handleSetResource'
import { BdsInput, BdsSelect, BdsInputPhoneNumber, BdsSwitch, BdsSelectChips, BdsTooltip } from 'blip-ds/dist/blip-ds-react';
import Select from '../Select/index'
import getStateBot from '../../services/getStateBot';
import getFlowId from '../../services/getFlowId';
import getMessageTemplate from '../../services/getMessageTemplate';
import configSystemService from '../../services/createSystem';
import getSystemServices from '../../services/getSystem';
import getInAttendance from '../../services/inAttandance'
import addFlowInSubBot from '../../services/addFlowInSubBot';


function BlockConfiguration({ info, tenantId, accessKey, shortName, nameSpace, builder }) {



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
  const [message, setMessage] = useState([])
  const [extension, setExtension] = useState(false)
  const [tokenApi, setTokenApi] = useState("Token ainda não gerado!")
  const [inputPhoneNumber, setInputPhoneNumber] = useState('');
  const [inputPhoneLabel, setInputPhoneLabel] = useState("Telefone do cliente");
  const [instalationFlow, setInstalationFlow] = useState(false);
  const [infoTicket, setInfoTicket] = useState(null);

  const [tokenBot, setTokenBot] = useState('');


  


  const handleRecordResource = async () => {

    const config = {
      "contract": !tenantId ? shortName : tenantId,
      "router": localStorage.getItem('infoRouter'),
      "routerKey": localStorage.getItem('info-flow-by-tags'),
      "headers": {
        "identifier": shortName,
        "accessKey": accessKey
      },
      "app": "crm-flowbytags"
    }


    const name = !tenantId ? shortName : tenantId;

    createResource(config, name);

  }



  const createResource = async (config, name) => {

    const payloadSystem = {
      "contract": name,
      "system": [
        {
          "app": "crm-flowbytags",
          "url": "",
          "index": "",
          "label": "",
          "icon": ""
        }
      ]
    }

    const resultCreateSytem = await configSystemService(payloadSystem);

    if (resultCreateSytem.status === 200) {

      await createUser(name)
      const result = await handleSetResource(config)

  
    } else {
      console.log('Erro ao registrar as configurações!');
    }
  }


  function showMessage(msg, type, status) {

    setTimeout(() => {
      showToast({
        type: type,
        message: msg
      })
      setLoading(false);
    }, 900);
  }



  const HandleGetAttandance = async () => {

    const routerKey =  localStorage.getItem('info-flow-by-tags');
    const routerName = localStorage.getItem('infoRouter').split('-')[0];

    
    try {

      const result = await addFlowInSubBot(guid(), routerKey, tenantId,  routerName);

      if (result.status !== 200) {

        showMessage('Erro na instalação, tente novamente mais tarde!', 'danger', 'Error!');
        setInstalationFlow(false)
        return false
      }
   
      setInstalationFlow(false)
      showMessage('Instalação realizada com sucesso em seu bot Router/Roteador', 'success', 'Error!');
      handleRecordResource()

    } catch (error) {

      showMessage('Erro na instalação, contate o administrador da extensão ou tente mais tarde', 'danger', 'Error!');
      setInstalationFlow(false)
    }
  };

  const checkBot = () => {

    // if (!templateSubBot || templateSubBot === 'Selecione um bot') {
    //   showMessage('Você precisa selecionar um chatbot', 'danger', 'Error!');
    //   return false
    // }

    setInstalationFlow(true)
  }


  return (
    <div className="">

      <div className="mt-2 mb-2">
        <div className="row">
          <div className="col-4">
 
            <bds-typo variant="fs-16">
               <strong>Webhook</strong>

            </bds-typo>
            <bds-typo variant="fs-12">
             Para o funcionamento correto da extensão, você deve instalar o webhook, para que possamos receber eventos do chatbot.
            </bds-typo>
            <br></br>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-4">
 
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

              <bds-button icon="builder-publish-bot" size="standard" variant="primary" onClick={checkBot} >Instalar Webhook</bds-button>
            </div>
          </div>

        </div>
        <br>
        </br>
        <br /><br />
      </div>
      <bds-alert open={instalationFlow}>
        <bds-alert-header variant="warning" icon="warning">
          Atenção!
        </bds-alert-header>
        <bds-alert-body>
          <strong> Você realmente deseja fazer esta ação?</strong>
          <br></br><br></br>
 
        </bds-alert-body>
        <bds-alert-actions>

          <bds-button icon="builder-publish-bot" variant="secondary" onClick={HandleGetAttandance}>Instalar</bds-button>
          <bds-button icon="close" variant="secondary" onClick={() => setInstalationFlow(false)}>Fechar</bds-button>
        </bds-alert-actions>
      </bds-alert>

      <NotificationContainer />
    </div>
  );

}


export default BlockConfiguration;