import m from 'mithril';
import {Button} from '../../components/ui';
import API from '../../components/api';


const Login = {
    controller() {
        this.state = {
            email: m.prop(""),
            password: m.prop("")
        };
    },
    view(c) {
        return (
            <div class="login">
                <br />
                <br />
                <form class="pro-form-login">
                    <fieldset>
                        <h1>Acme Inc - Travels</h1>
                        <h3>Sistemas Reembolsos</h3>
                        <div class="pt-control-group pt-vertical">
                            <div class="pt-input-group pt-large">
                                <span class="pt-icon pt-icon-person"></span>
                                <input type="email" name="email" class="pt-input" placeholder="Correo electrónico" value={c.state.email()} onchange={m.withAttr('value', c.state.email)} required />
                            </div>
                            <div class="pt-input-group pt-large">
                                <span class="pt-icon pt-icon-lock"></span>
                                <input type="password" name="password" class="pt-input" placeholder="Contraseña" value={c.state.password()} onchange={m.withAttr('value', c.state.password)} required />
                            </div>
                            <Button large >Iniciar sesión</Button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
};

export default Login;