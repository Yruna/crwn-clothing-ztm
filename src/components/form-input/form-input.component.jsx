import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
        <input className="form-input" {...otherProps}/>
        {label && (
            <label className={`${otherProps.value.lengh ? 'shrink' : ''} form-input-label`}>{label}</label>
            )}
        </div>
    );
};

export default FormInput;