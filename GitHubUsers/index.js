const inputUserName = document.querySelector('.input');
const findUsersDescription = document.querySelector('.users');
const userName = document.querySelector('.name');
const userLocation = document.querySelector('.location');
const userAvatarsUrl = document.querySelector('.avatarsUrl');
const userCompany = document.querySelector('.company');

inputUserName.addEventListener('keyup', searchUsers);

function searchUsers() {
    if(inputUserName.value != ''){
        fetch(`https://api.github.com/users/${inputUserName.value}`)
        .then((res)=>{
            return res.json();
        }).then((res)=>{
            createUser(res);
        })
    }
}
function createUser(res){
    let name = res.name,
        location = res.location,
        company = res.company,
        avatarsUrl = res.avatar_url;
    userAvatarsUrl.innerHTML = `<img src="${avatarsUrl}" class='img' alt='No images'></img>`
    if(name == null){
        userName.innerText = 'This user dont have name';
    }else{
        userName.innerText = 'Name: ' + name;
    }
    if(location == null){
        userLocation.innerText = 'This user dont have location';
    }else{
        userLocation.innerText = 'Location: ' + location;
    }
    if(company == null){
        userCompany.innerText = 'This user dont have company';
    }else{
        userCompany.innerText = 'Company: ' + company;
    }
}