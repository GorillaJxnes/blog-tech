const { json } = require("sequelize/types");
const { Post } = require("../../models");

const newAccount = async(e) => {
    e.preventdefault()
    const name = document.querySelector('#user-name').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/newaccount', {
            method: Post,
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-type': 'application/json'
            }

        })
        if (response.ok) {
            document.location.replace('/')
        }else {
            alert('Creation Failed.')
        }
    }
};

document.addEventListener('submit', newAccount);