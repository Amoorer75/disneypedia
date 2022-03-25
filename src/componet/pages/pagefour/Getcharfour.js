import { useNavigate } from 'react-router-dom';


export default function Getcharfour(props) {
    const navigate = useNavigate();

    console.log(props.char)

    const printOutChar = props.char.map((item,index) => {
        // console.log(item)

        return(
            <div className='charater'>
               <button key={index} onClick={() => navigate(`${item._id}`)}> <img src={item.imageUrl} />
                <p>{item.name}</p></button>
            </div>
        )
    })

    return(
        <div className='preview-char'>
            {printOutChar}

        </div>
    )

}