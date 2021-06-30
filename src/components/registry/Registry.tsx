import React from 'react';

export const Registry: React.FC = () => (
    <div className="row">
        <div className="col-md-4 col-sm-12">
            <label htmlFor="nombre" className="form-label">
                Nombre(s)
            </label>
            <input
                type="text"
                className="form-control is-valid"
                id="nombre"
                value="Mark"
                required
            ></input>
            <div className="valid-feedback">Correcto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="apellidoPaterno" className="form-label">
                Apellido Paterno
            </label>
            <input
                type="text"
                className="form-control is-valid"
                id="apellidoPaterno"
                value="Mark"
                required
            ></input>
            <div className="valid-feedback">Correcto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="apellidoMaterno" className="form-label">
                Apellido Materno
            </label>
            <input
                type="text"
                className="form-control is-valid"
                id="apellidoMaterno"
                value="Mark"
                required
            ></input>
            <div className="valid-feedback">Correcto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="fechaDeNacimiento" className="form-label">
                Fecha de Nacimiento
            </label>
            <input
                type="text"
                className="form-control is-valid"
                id="fechaDeNacimiento"
                value="28/12/1009"
                required
            ></input>
            <div className="valid-feedback">Correcto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="sexo" className="form-label">
                Sexo
            </label>
            <select className="form-select is-invalid" id="sexo" required>
                <option selected>Ver opciones</option>
                <option value="MASCULINO">Masculino</option>
                <option value="FEMENINO">Femenino</option>
                <option value="OTRO">Otro</option>
            </select>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-12"></div>
        <div className="col-md-3 col-sm-6">
            <label htmlFor="telefono" className="form-label">
                Telefono
            </label>
            <input
                type="text"
                className="form-control is-invalid"
                id="telefono"
                value="0123456789"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-5 col-sm-6">
            <label htmlFor="email" className="form-label">
                Correo Electronico
            </label>
            <input
                type="email"
                className="form-control is-invalid"
                id="email"
                value="example@domain.com"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-12"></div>
        <div className="col-md-7 col-sm-12">
            <label htmlFor="address" className="form-label">
                Direccion
            </label>
            <input
                type="text"
                className="form-control is-invalid"
                id="address"
                value="example@domain.com"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-5 col-sm-6">
            <label htmlFor="colonia" className="form-label">
                Colonia
            </label>
            <input
                type="text"
                className="form-control is-invalid"
                id="address"
                value="Centro"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="city" className="form-label">
                Ciudad
            </label>
            <input
                type="text"
                className="form-control is-invalid"
                id="city"
                value="Cordoba"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="state" className="form-label">
                Estado
            </label>
            <select className="form-select is-invalid" id="state" required>
                <option selected>Ver opciones</option>
                <option value="VERACRUZ">Veracruz</option>
            </select>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
        <div className="col-md-4 col-sm-6">
            <label htmlFor="codigoPostal" className="form-label">
                Codigo Postal
            </label>
            <input
                type="text"
                className="form-control is-invalid"
                id="codigoPostal"
                value="72653"
                required
            ></input>
            <div className="invalid-feedback">Incorrecto</div>
        </div>
    </div>
);
