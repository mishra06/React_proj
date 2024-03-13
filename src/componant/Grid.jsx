import "./Grid.css";
import Girl from "../assets/girl.avif";

const Grid = () => {
  const GridData = [
    {
      GridDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
    {
      GridDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
    {
      GridDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
    {
      GridDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
    {
      GridDesc:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
    {
      GridDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!",
      GridImg: { Girl },
      GridName: "Gladis Lennon",
      GridPos: "Head of SEO",
    },
  ];

  return (
    <div className="Grid_Card_sec">
      <div className="Grid_all_card">
        {GridData.map((elem, index) => {
          return (
            <div className="Grid_sec" key={index}>
              <div className="Grid_para">
                <p>{elem.GridDesc}</p>
              </div>
              <div className="down">
                <span className="Grid_girl">
                  <img src={elem.GridImg.Girl} alt="girl_pic" />
                </span>
                <div className="down_text">
                  <p>{elem.GridName}</p>
                  <p className="second_para">{elem.GridPos}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
