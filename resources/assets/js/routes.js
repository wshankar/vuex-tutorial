import Home from './components/Home';
import Login from './components/auth/Login';
import CustomersMain from './components/Customers/Main';
import CustomerList from './components/Customers/List'
import NewCustomer from './components/Customers/New'
import Customer from './components/Customers/View'

export const routes = [
    {
        path:'/',
        component: Home,
        meta: {
            requiresAuth: true
        }
    },
    {
        path:'/login',
        component: Login
    },
    {
        path:'/customers',
        component: CustomersMain,
        meta: {
            requiresAuth: true
        },
        children:[
            {
                path:'/',
                component: CustomerList
            },
            {
                path:'new',
                component: NewCustomer
            },
            {
                path:':id',
                component: Customer
            }
        ]
    }
];