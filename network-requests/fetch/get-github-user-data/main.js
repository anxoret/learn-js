let names = ["anxoret", "yan.sh"];

async function getUsers(names) {

    let usersInfo = [];

    for (let name of names) {
        let url = `https://api.github.com/users/${name}`;
        let response = await fetch(url).then(
            successResponse => {
                if (successResponse.ok) {
                    return successResponse.json();
                } else {
                    return null;
                }
            }, 
            failResponse => {
                return null;
            }  
        );
        usersInfo.push(response);
    }

    return usersInfo;
 
};

console.log(getUsers(names));