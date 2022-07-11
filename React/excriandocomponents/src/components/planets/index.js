import Planet from './planet';

const clickOnPlanet = (name) => {
       console.log(`Um click no planeta: ${name}`);
}

const Planets = () => {
    return (
        <div>
        <h1>Lista de planets</h1>
        <Planet name = 'Mercurio' 
                text = 'Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. ' 
                link = 'https://pt.wikipedia.org/wiki/Mercúrio_(planeta)'
                img_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1024px-Mercury_in_color_-_Prockter07-edit1.jpg'
                clickOnPlanet = {clickOnPlanet}
                />
                
        <Planet name = 'terra'
                text = ' A terra é o único planeta do Sistema Solar que não é um anel, e é o único que tem uma órbita circular.'
                titleWithUnderline = {true}
                img_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/600px-The_Blue_Marble_%28remastered%29.jpg' 
                clickOnPlanet = {clickOnPlanet}
                gray = {true}
         />
        <Planet name = 'saturno'
                text = 'Saturno é o quinto planeta do Sistema Solar, e o maior dos quatro aneis. '
                link = 'https://pt.wikipedia.org/wiki/Saturno'
                img_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/600px-Saturn_during_Equinox.jpg'
                clickOnPlanet = {clickOnPlanet}
        />
        </div>
        // um conteudo html sempre deve encapsualdo com um elemento <>, ou div por exemplo
        
        
    );
}

export default Planets;