import React from 'react'
import { PDFViewer, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
    textAlign: 'center',
    textDecoration: 'underline'
  },
  text: {
    fontSize: 12,
    marginBottom: 10
  },
  signature: {
    marginTop: 40,
    borderTop: '1 solid black',
    textAlign: 'center',
    fontSize: 12
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flex: 1,
    marginRight: 20
  }
})

const PagaréPDF = ({ pagarés }) => {
  const pageCount = Math.ceil(pagarés.length / 2)

  return (
    <Document>
      {Array.from({ length: pageCount }, (_, index) => (
        <Page key={index} size='A4' style={styles.page}>
          <View>
            <View style={styles.row}>
              {pagarés.slice(index * 2, index * 2 + 2).map((pagaré, idx) => (
                <View key={idx} style={styles.column}>
                  <Text>{pagaré.title}</Text>
                  <Text>{pagaré.content}</Text>
                  {/* Agregar aquí el contenido del pagaré según tus necesidades */}
                </View>
              ))}
            </View>
          </View>
        </Page>
      ))}
    </Document>
  )
}

const App = () => {
  const pagarésData = [
    {
      title: 'Pagaré 1',
      content: 'Este es el contenido del Pagaré 1.'
    },
    {
      title: 'Pagaré 2',
      content: 'Este es el contenido del Pagaré 2.'
    },
    {
      title: 'Pagaré 3',
      content: 'Este es el contenido del Pagaré 3.'
    },
    {
      title: 'Pagaré 4',
      content: 'Este es el contenido del Pagaré 4.'
    },
    {
      title: 'Pagaré 5',
      content: 'Este es el contenido del Pagaré 5.'
    }
  ]

  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer width='100%' height='100%'>
        <PagaréPDF pagarés={pagarésData} />
      </PDFViewer>
    </div>
  )
}

export default App
