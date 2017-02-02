import 'localstorage-polyfill';
import m from 'mithril';

import Dashboard from 'containers/dashboard/dashboard';
import EmployeeForm from 'components/dashboard/employee-form';
import TravelForm from 'components/dashboard/travel-form';
import ExpenseForm from 'components/dashboard/expense-form';
import TagsExpenseForm from 'components/dashboard/tagsexpense-form';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Login from 'containers/login/login';

document.addEventListener('DOMContentLoaded', () => {
    var root = document.getElementById('app');
    localStorage.setItem('idEmployee',false);
    localStorage.setItem('idTravel',false);
    localStorage.setItem('idExpense',false);
    const WrapMainLayout = (children) => {
        return {
            view() {
                return (
                    <MainLayout>{children}</MainLayout>
                );
            }
        }
    };

    m.route.mode = 'hash';
    m.route(root, '/', {
        '/': Login,
        '/dashboard': WrapMainLayout(Dashboard),
        '/dashboard/employee': WrapMainLayout(EmployeeForm),
        '/dashboard/travel': WrapMainLayout(TravelForm),
        '/dashboard/expense': WrapMainLayout(ExpenseForm),
        '/dashboard/tagsexpense': WrapMainLayout(TagsExpenseForm),
    });
});

