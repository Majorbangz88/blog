
const FilledButton = (
    {
        text, padding, background, color,
        cursor, border, borderRadius, fontFamily,
        fontSize, fontWeight
    }
) => {
    return (
        <div>
            <button style={
                {
                    padding: padding, background:background, color: color,
                    cursor:cursor, border:border, borderRadius:borderRadius,
                    fontFamily: fontFamily, fontSize:fontSize, fontWeight:fontWeight
                }
            }>
                {text}
            </button>
        </div>
    )
}

export default FilledButton