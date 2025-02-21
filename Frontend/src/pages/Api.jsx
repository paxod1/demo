import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Api() {
    const [data, setData] = useState([])

    const [search, setSearch] = useState('')

    useEffect(() => {

        async function dataget() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
                console.log(response.data);
                setData(response.data)

            } catch (err) {
                console.log('from dataget function ', err);
                alert('from data get function ', err)
            }
        }

        dataget()

    }, [])

    const filterData = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{ paddingTop: '5%' }}>

            <input type="text" placeholder='search'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                style={{ height: '30px', width: '400px', border: '1px solid black', borderRadius: '10px', paddingLeft: '10px' }} />

            {
                filterData.map((d) => (
                    <div >

                        <h3>{d.title}</h3>

                        <img src={d.thumbnailUrl} height={'100px'} width={'100px'} alt="" />

                    </div>

                ))


            }

        </div>
    )
}

export default Api