const InputCustom = ({label, type, placeholder, value, onChange} ) => {
    return(
        <div className = "mb-4">
            <label className= "block text-gray-700 text-sm font-bold mb-2"> {label}</label>
                <input
                    type = {type}
                    placeholder = {placeholder}
                    value = {value}
                    onChange = {onChange}
                    className="shadow appearence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
             </div>
        );
    };

export default InputCustom;