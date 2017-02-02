import m from 'mithril';
import {Button} from '../../components/ui';
import API from '../../components/api';


const Login = {
    controller() {
        this.state = {
            email: m.prop(""),
            password: m.prop("")
        };

        this.login = () => {m.route('/dashboard')}
    },
    view(c) {
        return (
            <div class="cont-login">
                <div class="login">
                    <br />
                    <br />
                    <form class="form-login">
                        <fieldset>
                            <h1>Acme Inc - Travels</h1>
                            <h3>Sistema de reembolsos</h3>
                            <div class="pt-control-group pt-vertical">
                                <div class="pt-input-group pt-large">
                                    <span class="pt-icon pt-icon-person"></span>
                                    <input type="email" name="email" class="pt-input" placeholder="Correo electrónico" value={c.state.email()} onchange={m.withAttr('value', c.state.email)} required />
                                </div>
                                <div class="pt-input-group pt-large">
                                    <span class="pt-icon pt-icon-lock"></span>
                                    <input type="password" name="password" class="pt-input" placeholder="Contraseña" value={c.state.password()} onchange={m.withAttr('value', c.state.password)} required />
                                </div>
                                <Button large onclick={c.login.bind(c)} >Iniciar sesión</Button>
                            </div>
                        </fieldset>
                        <br/>
                        <h3><i>By Stivenson Rincón<br/> <br/> Testeado en <b>Google Chrome <br/><br/>(Versión Actualizada)</b></i></h3>

                    </form>
                </div>
            </div>
        );
    }
};

export default Login;