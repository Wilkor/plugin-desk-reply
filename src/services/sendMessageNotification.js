import axios from 'axios';

export default (contract, name) => {

    axios.put('https://ntfy.sh/new_plugin_take?title=Blip Store&tags=heart_eyes&priority=5', `O contrato ${contract.trim()} acabou de instalar a extensão ${name}`)
   return true
}

