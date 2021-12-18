import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Heading from "../layout/Heading";

const schema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    lastname: yup.string().required("Please enter your last name"),
    email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
    message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div><Heading title="Contact Us" />
                <p>Have any questions?</p></div>
            <input {...register("name")} />
            {errors.name && <span>{errors.name.message}</span>}
            <input {...register("lastname")} />
            {errors.lastname && <span>{errors.lastname.message}</span>}

            <input {...register("email")} />
            {errors.email && <span>{errors.email.message}</span>}

            <textarea {...register("message")} />
            {errors.message && <span>{errors.message.message}</span>}

            <select {...register("regards")}>
                <option value="spacecraft">spacecraft</option>
                <option value="aliens">aliens</option>
                <option value="world domination">world domination</option>
            </select>

            <button>Send</button>
        </form>
    );
}

export default App;