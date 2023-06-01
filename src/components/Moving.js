import '../App.css'

export default function Moving({ senarioSelected, selected }) {
  
    return (
        <div className='moving-ball'>
            {senarioSelected && selected.map((item, i) => {
                const style =
                {
                    left: `${item.positionX}px`,
                    top: `${item.positionY}px`,
                }
                return (
                    <div className="ball" key={i} style={style}>
                    {i+1}
                    </div>
                )
            })}
        </div>
    )
}
