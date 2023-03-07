export default function pageParent(){

    function getFromChild(dataPayload){

        console.log('value got in parent', dataPayload);

    }

    return (

        <>
        <h1>Parent Component</h1>

        <Child onPushtoParent={getFromChild}/>

        </>

    )

}


function Child(props){

    let dataPayload = {name: 'salman', 'email': 'sa2kdev@gmail.com'}


    function handlePushParent(e){

        e.preventDefault();

        props.onPushtoParent(dataPayload);

    }
    



    


    return (

        <>

        <h2>Child component</h2>

        <button onClick={handlePushParent}>Trigger push to parent</button>


        </>

        



    )

}