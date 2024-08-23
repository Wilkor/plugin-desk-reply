import React, { useEffect, useState } from "react";
import "blip-toolkit/dist/blip-toolkit.css";
import { getApplication, getContacts } from "./api/applicationService";
import { getApplicationData, getSubbotsData, getWhatsAppAccount } from "./api/application-service";
import * as ApplicationService from "./api/application-service2";
import { showToast, withLoading } from "./api/commomService";
import { PageHeader } from "components/PageHeader";
import { CommonProvider } from "contexts/CommonContext";
import { PageTemplate } from "components/PageTemplate";
import { BlipTabs } from 'blip-toolkit'
import { BdsIcon } from 'blip-ds/dist/blip-ds-react';
import LogoCloneBots from './static/images/parse_cloneBots_v2.png';
import PluginDesk from 'components/BlipDesk/desk';
import Templates from 'components/Templates';
import BlockConfiguration from 'components/BlockConfiguration';
import Dicionario from 'components/Dicionario';
import Reports from 'components/Reports';
import Doc from 'components/Doc/index';

import { getLoggedUser } from './api/user-service';
import { setSubBots } from '../src/store/actions/application';
import { set_builder } from './constants/application-actions'


function App() {


    const IDENTITY_COMPLEMENT = '@msging.net';
    const [application, setApplication] = useState({ shortName: '', accessKey: '', key: '', tenantId: '', emailOwner: '', email: '' })
    const [whatsAppAccount, setwhatsAppAccount] = useState({ currency: '', id: '', message_template_namespace: '', name: '', timezone_id: '' })

    const isTemplateMaster = (application) => {
        return !!application && application.template === 'master';
    };

    const getSubbots = async (application, messageProxyRequest = true) => {
        let sub_bots = [];
        const {
            accessKey,
            name,
            applicationJson: { identifier, settings }
        } = application;

        if (isTemplateMaster(application)) {
            if (messageProxyRequest) {
                const subbots_application_list = await getSubbotsData(
                    application
                );
                if (!!subbots_application_list) {
                    const bot_info = subbots_application_list.map(
                        (bot_application) => {
                            const {
                                tenantId: subbot_tenantId,
                                accessKey: subbot_accessKey,
                                name: subbot_name,
                                applicationJson: {
                                    identifier: subbot_identifier,
                                    settings: subbot_settings
                                }
                            } = bot_application;
                            const flow_id = !!subbot_settings.flow
                                ? subbot_settings.flow.id
                                : '';
                            return {
                                organization: !!subbot_tenantId
                                    ? subbot_tenantId
                                    : '',
                                accessKey: subbot_accessKey,
                                identifier: subbot_identifier,
                                identity: `${subbot_identifier}${IDENTITY_COMPLEMENT}`,
                                longName: subbot_name,
                                flowId: flow_id,
                                key: 'Key ' + btoa(`${subbot_identifier}:` + atob(subbot_accessKey))

                            };
                        }
                    );

                    sub_bots = [...bot_info];
                }
            } else if (!!settings && settings.children) {
                const { children } = settings;
                sub_bots = [...children];
            }
        } else {
            const flow_id = !!settings.flow ? settings.flow.id : '';
            const bot_info = {
                accessKey,
                identifier,
                identity: `${identifier}${IDENTITY_COMPLEMENT}`,
                longName: name,
                flowId: flow_id
            };
            sub_bots.push(bot_info);
        }
        localStorage.setItem('details', JSON.stringify(sub_bots));
        return await setSubBots(sub_bots);
    };

    useEffect(async () => {
        withLoading(async () => {


            await getSubbots(await getApplication());

    
            const { currency, id, message_template_namespace, name, timezone_id } = await getWhatsAppAccount();
            localStorage.setItem("message_template_namespace", message_template_namespace)

            setwhatsAppAccount({ currency, id, message_template_namespace, name, timezone_id });

            const { email } = await getLoggedUser();

            const { accessKey, shortName, tenantId, emailOwner, channels, } = await getApplication();

            const KEY = 'Key ' + btoa(`${shortName}:` + atob(accessKey));
            setApplication({ shortName, accessKey, key: KEY, tenantId, emailOwner, email });
            localStorage.setItem('plugin-tenant-id', tenantId);
            localStorage.setItem('plugin-deskReply', KEY);
            localStorage.setItem('infoRouter', shortName + '-' + channels[0]?.configurations?.PhoneNumber);
            localStorage.setItem('shortName', shortName);

            showToast({
                type: "success",
                message: "Success loaded"
            });

            new BlipTabs('tab-nav');
        });

    }, [])

    const title = `Extensão Agenda`;
    const logo = LogoCloneBots;
    const keyTarget = application.key;
    const shortName = application.shortName;
    const tenantId = application.tenantId;
    const accessKey = application.accessKey;
    const emailUserLogged = application.email;
    const nameSpaceId = whatsAppAccount.message_template_namespace


    return (
        <>
            <CommonProvider>

                <PageHeader logo={logo} />
                <div id="main" className="App" style={{ marginTop: '-50px' }}>
                    <div id="tab-nav" className="bp-tabs-container">
                        <ul className="bp-tab-nav">
                            {/* <li>
                                <a href="#" data-ref="template">Criar template</a><BdsIcon theme="outline" type="icon" name="megaphone" />
                            </li> */}

                            <li>
                                <a href="#" data-ref="flow">Configuração</a> <BdsIcon theme="outline" type="icon" name="settings-general" />
                            </li>

                            <li>
                                <a href="#" data-ref="doc">Documentação</a> <BdsIcon theme="outline" type="icon" name="file-name-doc" />
                            </li>
                        </ul>
                        <div className="bp-tab-content fl w-1000" data-ref="flow">
                            <PluginDesk keyTarget={keyTarget} tenantId={tenantId} shortName={shortName} accessKey={accessKey} nameSpace={nameSpaceId} builder={set_builder} />
                        </div>

                        <div className="bp-tab-content fl w-1000" data-ref="template">
                            <Templates />
                        </div>

                        <div className="bp-tab-content fl w-1000" data-ref="doc">
                            <Doc />
                        </div>


                    </div>
                  
                </div>
            </CommonProvider>

        </>
    )
}

export default App