function apiTest(){
    const _body = {
        'email':'test@gmail.com',
        'password':'test123',
        'first_name':'Anthony',
        'last_name':'Vespoli',
        'height':'5\'11"',
        'age':'25',
        'primary_role':'SF',
        'secondary_role':'PF',
        'country':'Canada',
        'province':'Quebec',
        'city':'Montreal',
        'reliability':''
    }
    fetch('/api/register', {       
        method: 'POST',
        body: JSON.stringify(_body),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    }).then(response => response.text())
    .then(data => {
        document.querySelector('#test').innerHTML = `<p>${data}</p>`
    });
}


// function apiTest(){
//     console.log('test');
//     fetch('/api/test')
//     .then(res => res.json())
//     .then(data => 
//         {
//             document.querySelector('#test').innerHTML = `<p>${data['test']}</p>`;
//         }
//     );
// }