const React = require('react');
const design = {
    color: 'black',
    backgroundColor: 'green'
};

 class Index extends React.Component{
    render(){
        const { pokemon } = this.props;
       

        return(
            <body style={design}>
            <div > 
                <h1>See All The Pokemon!</h1>
    
            </div>
            </body>
        )
    }
 }

 module.exports = Index;