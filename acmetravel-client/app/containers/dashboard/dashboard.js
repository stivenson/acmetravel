import m from 'mithril';
import {Spinner} from '../../components/ui';
import API from '../../components/api';

const Dashboard = {
    vm(){
        return {
            employees: m.prop('empty'),
            fetchEmployees: () => {
                return API.get('users/index');
            }
        }
    },
    controller(){
        this.vm = Dashboard.vm();
        this.vm.fetchEmployees().then(this.vm.employees).then(()=>m.redraw()); 
    },
    view(c){

        let spin = <div class="text-center"><Spinner /></div>;
        let employees = spin;

        if(c.vm.employees() != 'empty'){
            if(c.vm.employees().length < 1){
                employees = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            En el momento no hay empleados registrados
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                employees = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th># CC</th>
                                <th>Nombre</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.employees().map((e) => {
                                return (
                                    <tr>
                                        <td>{e.cc}</td>
                                        <td>{e.names} {e.surnames}</td>
                                        <td>
                                            <a>
                                                <span class="pt-icon-standard pt-icon-airplane"></span>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}

                            </tbody>
                        </table>
                    </div>
                ) 
            }
        }

        return (
        	<div class="dashboard">
                <div class="text-center">
                    <legend>Acme Inc - Travels</legend>
                </div>

        	   <div class="row">
                    <div class="col-md-3">
                        <div class="text-center"><h3>Empleados</h3></div>
                        <div class="panel panel-default">
                          <div class="panel-body">
                                {employees}
                          </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-airplane"></span> Viajes de Empleado</h3></div>
                        <div class="panel panel-default">
                          <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Title</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                        <td><a><span class="pt-icon-standard pt-icon-dollar"></span></a></td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                          </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    Debe seleccionar empleado
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    No hay viajes registrados para el empleado seleccionado
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                    </div>
                    <div class="col-md-3">
                        <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-dollar"></span> Gastos de Viaje</h3></div>
                        <div class="panel panel-default">
                          <div class="panel-body">
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Title</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                        <td><a><span class="pt-icon-standard pt-icon-tag"></span></a></td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    <tr>
                                        <td>a</td>
                                        <td>b</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                          </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    Debe seleccionar viaje
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    No hay gastos registrados para el viaje seleccionado
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>



                    </div>
                    <div class="col-md-3">
                        <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-tag"></span> Etiquetas de gasto</h3></div>

                        <div class="panel panel-default">
                          <div class="panel-body">

                          </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    Debe seleccionar gasto
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                <br />
                                <br/>
                                <div class="text-center">
                                    <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                                    No hay etiquetas registradas para el gasto seleccionado
                                </div>
                                <br />
                                <br />
                            </div>
                        </div>

                    </div>
               </div>
        	</div>
        )
    }
}

export default Dashboard;
