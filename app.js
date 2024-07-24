const heading = React.createElement('h1', {id: 'first'}, 'First heading');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    React.createElement(
        'div', {id: 'child'}, 
    React.createElement(
        'h1',
        {}, "I'm h1 tag"))
);

root.render(parent)