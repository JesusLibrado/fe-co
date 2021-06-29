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
    </div>
);
