import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { showToast } from '../../api/commomService'
const Template = () => {

    const handleCreateTemplate = async () => {
        const url = `https://${localStorage.getItem('plugin-tenant-id')}.http.msging.net/commands`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `${localStorage.getItem('plugin-share-screen')}`,
        };

        const body = {
            "method": "set",
            "type": "application/json",
            "to": "postmaster@wa.gw.msging.net",
            "uri": "/message-templates",
            "resource": {
                "name": "view_desk_parse",
                "components": [
                    {
                        "type": "BUTTONS",
                        "buttons": [
                            {
                                "type": "URL",
                                "text": "compartilhar",
                                "url": "https://parse-viewdesk-201fbd4fbda4.herokuapp.com/client?{{1}}",
                                "$$hashKey": "object:831",
                                "example": [
                                    "teste=11"
                                ]
                            }
                        ]
                    },
                    {
                        "type": "BODY",
                        "text": "ViewDesk"
                    }
                ],
                "language": "pt_BR",
                "category": "MARKETING"
            },
            "id": uuidv4(),
            "from": `${localStorage.getItem('shortName')}@msging.net`
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body),
            });

            const result = await response.json();
            if (result.status !== 'failure') {

                showMessage('Extensão atualizada com sucesso', 'success');
                return
            }

            showMessage('Erro ao atualizar a extensão ou template já existe', 'danger')
        } catch (error) {
            showMessage('Erro ao atualizar a extensão', 'danger')
        }
    };
    function showMessage(msg, type, status) {

        setTimeout(() => {
            showToast({
                type: type,
                message: msg
            })

        }, 100);
    }

    return (
        <div>
            <h1>Template</h1>
            <hr />
            <span>Ao clicar no botão abaixo, um template com nome de: <strong>view_desk_parse</strong> será criado automaticamente</span><br /><br />
            <bds-button
                icon="builder-publish-bot"
                style={{ display: 'flex', justifyContent: 'start' }}
                size="short"
                onClick={handleCreateTemplate}>
                Criar Template
            </bds-button>
        </div>
    );
}

export default Template;
