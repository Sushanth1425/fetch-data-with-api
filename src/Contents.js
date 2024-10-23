import React from 'react'

const Contents = ({content}) => {
 if (Array.isArray(content)){
  return (
    <table>
      <tbody>
        {content.map((element,index) => (
          <tr key={index}>
            {Object.keys(element).map((key) => (
                <td key={key}>{JSON.stringify(element[key])}</td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
 }
  return <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>{content}</div>
}

export default Contents