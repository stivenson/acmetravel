import m from 'mithril';
import {Spinner} from '../../components/ui';
import API from '../../components/api';

const Dashboard = {
    vm(){
        return {
            employees: m.prop('empty'),
            travels: m.prop('empty'),
            expenses: m.prop('empty'),
            tagsexpenses: m.prop('empty'),
            tags: m.prop('empty'),
            fetchEmployees: () => {
                return API.get('users');
            },
            fetchTravels: (idEmployee) => {
                return API.get(`travels/employees/${idEmployee}`); 
            },
            fetchExpenses: (idTravel) => {
                return API.get(`expenses/travels/${idTravel}`);
            },
            fetchTagsExpense: (idExpense) => {
                return API.get(`tagsexpenses/expenses/${idExpense}`);
            },
            fetchTags: () => {
                return API.get('tags');
            }
        }
    },
    controller(){
        this.vm = Dashboard.vm();
        this.vm.fetchEmployees().then(this.vm.employees).then(()=>m.redraw()); 
        this.vm.fetchTags().then(this.vm.tags).then(()=>m.redraw());

        this.loadTravels = (idEmployee) => {this.vm.fetchTravels(idEmployee).then(this.vm.travels).then(()=>m.redraw())}; 

        this.loadExpenses = (idTravel) => {this.vm.fetchExpenses(idTravel).then(this.vm.expenses).then(()=>m.redraw())};

        this.loadTagsExpense = (idExpense) => {this.vm.fetchTagsExpense(idExpense).then(this.vm.tagsexpenses).then(()=>m.redraw())}; 
    },
    view(c){

        let spin = <div class="text-center"><Spinner /></div>;
        let employees = spin;
        let travels = spin;
        let expenses = spin;
        let tagsexpenses = spin;

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
                                            <a onclick={c.loadTravels.bind(c,e.id)}>
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


        if(c.vm.travels() != 'empty'){
            if(c.vm.travels().length < 1){
                travels = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay viajes registrados para el empleado seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                travels = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Descrip.</th>
                                <th>Finaliz.</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.travels().map((t) => {
                                return (
                                    <tr>
                                        <td>{t.description.substring(0, 12)}...</td>
                                        <td>{t.finalized}</td>
                                        <td>
                                            <a onclick={c.loadExpenses.bind(c,t.id)}>
                                                <span class="pt-icon-standard pt-icon-dollar"></span>
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
        }else{
            travels = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar empleado
                    </div>
                    <br />
                    <br />
                </div>
            )
        }


        if(c.vm.expenses() != 'empty'){
            if(c.vm.expenses().length < 1){
                expenses = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay gastos registrados para el viaje seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                expenses = (
                    <div class="table-responsive">
                        <table class="table table-striped">
                            <thead>
                            <tr>
                                <th>Valor(COP)</th>
                                <th>Fecha</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>

                            {c.vm.expenses().map((t) => {
                                return (
                                    <tr>
                                        <td>${t.amount}</td>
                                        <td>{t.created_at.substring(0,10)}</td>
                                        <td>
                                            <a onclick={c.loadTagsExpense.bind(c,t.id)}>
                                                <span class="pt-icon-standard pt-icon-tag"></span>
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
        }else{
            expenses = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar viaje
                    </div>
                    <br />
                    <br />
                </div>
            )
        }


        if(c.vm.tagsexpenses() != 'empty'){
            if(c.vm.tagsexpenses().length < 1){
                tagsexpenses = (
                    <div>
                        <br />
                        <br/>
                        <div class="text-center">
                            <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                            No hay etiquetas registradas para el gasto seleccionado
                        </div>
                        <br />
                        <br />
                    </div>
                )
            }else{
                tagsexpenses = (
                    <div >
                        {c.vm.tagsexpenses().map((t) => {
                            return (
                                <span class="custom-padding"><span class="pt-tag pt-intent-primary">{t.text}</span></span>
                            )
                        })}
                    </div>
                ) 
            }
        }else{
            tagsexpenses = (
                <div>
                    <br />
                    <br/>
                    <div class="text-center">
                        <span class="pt-icon-standard pt-icon-ban-circle"></span><br />
                        Debe seleccionar gasto
                    </div>
                    <br />
                    <br />
                </div>
            )
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
                                {travels}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-dollar"></span> Gastos de Viaje</h3></div>
                        <div class="panel panel-default">
                            <div class="panel-body">
                                {expenses}
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="text-center"><h3> <span class="pt-icon-standard pt-icon-tag"></span> Etiquetas de gasto</h3></div>

                        <div class="panel panel-default">
                            <div class="panel-body">
                                {tagsexpenses}
                            </div>
                        </div>
                    </div>
               </div>
        	</div>
        )
    }
}

export default Dashboard;
