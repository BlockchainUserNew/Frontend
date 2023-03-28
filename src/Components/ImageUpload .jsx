import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
// import '../Components/ImageUpload.css'

const ImageUpload = ({ label, setValue }) => {
    const [image, setImage] = useState();
    const changeHandle = (event) => {
        const selectedFile = event.target.files[0];
        setValue(selectedFile);
        setImage(selectedFile);
    };
    console.log("image", image)
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label className='d-block' >
                    {label} <span className="text-danger">*</span>
                </Form.Label>
                <Form.Label

                    style={{
                        background: '#dfd2d2',
                        padding: '7px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        // width: '33%'

                    }}
                    htmlFor="upload">
                    image Upload
                </Form.Label>

                <Form.Control
                    type="file"
                    setValue={setValue}
                    onChange={changeHandle}
                    required
                    id="upload"
                    hidden
                />{image?.name && <span className='px-3'>{image?.name}</span>}
            </Form.Group>
        </>
    )
}

export default ImageUpload 