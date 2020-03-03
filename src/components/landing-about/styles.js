export default function getStyles(theme, resolution) {
  const fontSize = resolution.width > 600
    ? 60
    : 38
  const styles = {
    ...theme,

    root: {
      minHeight: 'calc(100vh - 100px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 50,
    },

    title: {
      fontSize,
      color: '#24423C',
      marginBottom: 50,
      textAlign: 'center',
      small: {
        fontSize: '22px',
        marginTop: 10,
        color: '#888',
        textAlign: 'justify',
      },
      center: {
        textAlign: 'center',
      },
    },
  }
  return styles
}
