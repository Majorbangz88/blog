
const GhostButton = (
    {
        text, padding, background, color,
        cursor, border, borderRadius, fontFamily,
        fontSize, fontWeight
    }
) => {
    return (
        <div style={
            {
                padding: padding, background:background, color: color,
                cursor:cursor, border:border, borderRadius:borderRadius,
                fontFamily: fontFamily, fontSize:fontSize, fontWeight:fontWeight
            }
        }>
            {text}
        </div>
    )
}

export default GhostButton;