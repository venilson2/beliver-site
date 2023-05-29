const Form = () => {
    return (
        <form action="contact.html" method="post">
            <p className="first-column no-margin-bottom">
                <label htmlFor="author">
                    Seu nome <span className="required">*</span>
                </label>{' '}
                <input
                    id="author"
                    name="author"
                    type="text"
                    value=""
                    size={30}
                    maxLength={245}
                    required
                />
            </p>
            <p className="last-column no-margin-bottom">
                <label htmlFor="email">
                    Seu e-mail <span className="required">*</span>
                </label>{' '}
                <input
                    id="email"
                    name="email"
                    type="email"
                    value=""
                    size={30}
                    maxLength={100}
                    required
                />
            </p>
            <p className="no-margin-bottom">
                <label htmlFor="message">
                    Sua mensagem <span className="required">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    cols={45}
                    rows={5}
                    maxLength={525}
                    required
                ></textarea>
            </p>
            <p className="no-margin-bottom">
                <input
                    name="submit"
                    type="submit"
                    id="submit"
                    value="Enviar mensagem"
                />
            </p>
        </form>
    )
}

export default Form;