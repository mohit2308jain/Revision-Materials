import React from 'react';
import axios from 'axios';

const APIKEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';
const Convert = ({ language, text }) => {

    const [translated, setTranslated] = React.useState('');
    const [debouncedText, setDebouncedText] = React.useState(text);

    React.useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);

        return() => {
            clearTimeout(timerId);
        }
    }, [text]);

    React.useEffect(() => {
        const doTranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: APIKEY
                }
            })
            setTranslated(data.data.translations[0].translatedText);
        }

        doTranslation()
    }, [debouncedText, language])

    return(
        <div>
            <div className="ui header">{translated}</div>
        </div>
    )
}

export default Convert;