import './Grid.css'
import Girl from '../assets/girl.avif'

const Grid =() =>{

    const GridData = [{
        "GridDesc" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
        "GridImg" : {Girl},
        "GridName" : "Gladis Lennon",
        "GridPos" : "Head of SEO"
    }]
    

        GridData.map((elem,index)=>{
            return(
                <div className='Grid_sec'>
                    <div className="Grid_para">
                        <p>{elem.GridDesc}</p>
                    </div>
                    <div className="down">
                        <span className='Grid_girl'>
                            <img src={elem.GridImg} alt="girl_pic" />
                        </span>
                        <div className="down_text">
                            <p>{elem.GridName}</p>
                            <p className='second_para'>{elem.GridPos}</p>
                        </div>
                    </div>
                    key={index}
                </div>
            )
            
        })
}

export default Grid;