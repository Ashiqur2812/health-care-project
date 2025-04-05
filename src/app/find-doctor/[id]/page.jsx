// this is just demo design page to get data real ldesign will made by frontend side developer
async function fetchdoctorData(id){
// console.log('this is doctor id ', id);
const res = await fetch(`http://localhost:3000/api/doctors/${id}`)
// if (!res.ok) throw new Error('Failed to fetch doctor data');
return res.json();
}
const Doctordetails = async ({params}) => {
   const doctor =await fetchdoctorData(params.id)
//    data has been fetched here ui developer should design with this data
const {name, image} = doctor; // i just destructure two data for to show example 
   console.log(doctor);
    return (
        <div>
            doctor profile id : {params.id}
            <h1>this is doctor: {name}</h1>
        </div>
    );
};

export default Doctordetails;