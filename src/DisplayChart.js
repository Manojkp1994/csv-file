import React from 'react'
import Chart from 'react-google-charts'


const DisplayChart = (props) =>{
  const {fileData} = props

  const filterData = fileData.filter((ele) => {
      return ele.Guest === 'Yes'
  })
 // console.log(filterData)

  const chartData = filterData.map((ele) => {
      return [ele['Name (Original Name)'], Number(ele['Total Duration (Minutes)'])]
  })
  //console.log(chartData)
    
    return(
        <div>
            
            <div style={{display : 'flex', maxWidth:900}} >
                    <Chart
                        width={800}
                        height={300}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}

                        data = {[
                            ['Student Names', 'Minutes Attended'], ...chartData
                            
                        ]}

                        options = {{
                            title : "Attendence of Students",
                            chartArea: { width: '30%' },
                            hAxis: {
                                title: 'Student Names',
                                 minValue: 0,
                            },
                            vAxis: {
                                title: 'Minutes Attended',
                              },

                        }}
                        
                    />
            </div>
        </div>
    )
}

export default DisplayChart