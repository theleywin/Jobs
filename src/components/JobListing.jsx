import PropTypes from 'prop-types';
import {useState} from "react";
import {FaMapMarker} from "react-icons/fa";



const JobListing = ({ job }) => {
    const[showFullDescription,setShowFullDescription]= useState(false);
    let description = job.description;
    if(!showFullDescription){
        description = description.substring(0, 100)+'...';
    }
    return(
        <div className="bg-white p-4 rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 ny-2">
                        {job.type}
                    </div>
                    <h3 className='text-xl font-bold'>
                        {job.title}
                    </h3>
                </div>
                <div className='mb-5'>{description}</div>
                <button onClick={()=>setShowFullDescription((prevState)=>!prevState)}
                        className="text-indigo-500 mb-5 hover:text-indigo-700">
                    {showFullDescription ? 'Show Less' : 'Show More'}
                </button>
                <h3 className='text-indigo-580 mb-2'>
                    {job.salary} / Year
                </h3>
                <div className="border border-gray-100 nb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 nb-3">
                       <FaMapMarker className="inline text-lg mb-1"/>
                        {job.location}
                    </div>
                    <a className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white
                    px-4 py-2 rounded-lg text-center text-sm" href={`/job/${job.id}`}>
                        Read More
                    </a>
            </div>
        </div>
    </div>
    )

}
JobListing.propTypes = {
    job: PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
};

export default JobListing;