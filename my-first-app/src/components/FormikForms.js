import React from 'react'
import { useFormik } from 'formik'


function FormikForms() {

    const formik = useFormik({
        initialValues : {
            name:'',
            email:'',
            comment:''
        },

         onSubmit: values => {
             console.log(values)
         },

        validate: values => {

            const errors ={}
             
            if (!values.name) {
                errors.name = 'Required*'
            }
            
            if (!values.email) {
                errors.email='Required*'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email='Email Formate is Wrong'
            }
            
            if (!values.comment) {
                errors.comment='Required*'
            }
            
            return errors
        }
             
    })

    console.log('Field Visited are', formik.touched )

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form_Contrller'>
                    <label htmlFor='name'>Name : </label>
                    <input type='text' name='name' id='name' onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} ></input>
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name }</div> :null}
            </div>
                
                <div className='form_Contrller'>
                    <label htmlFor='email'>Email : </label>
                    <input type='email' name='email' id='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} ></input>
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email }</div> :null}

               </div>
               
                <div className='form_Contrller'>
                    <label htmlFor='comment'>Comment : </label>
                    <input type='text' name='comment' id='comment' onChange={formik.handleChange} value={formik.values.comment} onBlur={formik.handleBlur}></input>
                    {formik.touched.comment && formik.errors.comment ? <div className='error'>{formik.errors.comment }</div> :null}

                </div>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormikForms
