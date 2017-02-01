import 'localstorage-polyfill';
import m from 'mithril';

import Dashboard from 'containers/dashboard/dashboard';
import MainLayout from 'layouts/MainLayout/MainLayout';
import Login from 'containers/login/login';

document.addEventListener('DOMContentLoaded', () => {
    var root = document.getElementById('app');

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
        '/dashboard': WrapMainLayout(Dashboard)
    });
});

