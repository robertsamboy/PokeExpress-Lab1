const React = require('react');
const design = {
    color: 'black',
    backgroundColor: 'green'
};

 class Index extends React.Component{
    render(){
        const { pokemon } = this.props;
       function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
       }

        return(
            <body style={design}>
            <div > 
                <h1>See All The Pokemon!</h1>
                <ul> 
                    {pokemon.map((pokemon, i) =>{
                        return(
                            <li> 
                                This{' '}
                                {caps(pokemon.name)}
                                {' '}
                                is{' '}
                                a{' '}
                                pokemon!
                               
                            </li>
                        )
                        
                
                    })}
                </ul>
                
            </div>
           
            </body>
        )
    }
 }

 module.exports = Index;