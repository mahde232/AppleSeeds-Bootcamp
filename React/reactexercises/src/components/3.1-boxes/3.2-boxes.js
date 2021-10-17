const Box1 = () => {
    return <div style={{padding: '10px', backgroundColor: 'lightgreen'}}>
        <Box2 />
    </div>
}
const Box2 = () => {
    return <div style={{padding: '10px', backgroundColor: 'lightblue'}}>
        <Box3 />
    </div>
}
const Box3 = () => {
    return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'pink', padding: '10px'}}>
        <Box4 />
        <Box4 />
    </div>
}
const Box4 = () => {
    return <div style={{height: '5vmin', width: '99%', backgroundColor: 'purple', margin: '10px'}}>
    </div>
}

const Boxes = ()=> {
    return (
        <Box1 />
    )
}

export default Boxes;