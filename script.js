let saveFile = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if(!name || !email || !message){
        alert('please fill in all field.');
        return;
    }
    if(name&& email&& message)
    {
        alert("msg sent sucessfully")
    }
    
    
    const data = {
        name: name,
        email: email,
        message: message,
        timestamp: new Date().toISOString()
    };
    const jsonData = JSON.stringify(data);
    
    const blob = new Blob([jsonData],{type:'application/json'});
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'message.json';
    
    document.body.appendChild(a);
    a.click();
    
    document.removeChild(a);
    URL.revokeObjectURL(url);
    
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    

    alert('message saved as message.json');
    
}