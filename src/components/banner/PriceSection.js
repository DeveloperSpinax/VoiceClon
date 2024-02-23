import { Grid, Box, Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import PriceCard from '../cards/PriceCard'
import CardSwitch from '../cards/CardSwitch'

const basic = [
    'Translate your video & audio into 130+ languages',
    'Automated speech-to-text transcription',
    'Automated machine translation',
    'Voice Cloning for 28 languages',
]

const basicSpanish = [
    'Traduce tu video y audio a más de 130 idiomas',
    'Transcripción automática de voz a texto',
    'Traducción automática de máquinas',
    'Clonación de voz para 28 idiomas',
]

const pro = [
    'Translate your video & audio into 130+ languages',
    'Automated speech-to-text transcription',
    'Automated machine translation',
    'Voice Cloning for 28 languages',
    'SRT upload support',
    'AI-rewriter to control fast speech'
]

const proSpanish = [
    'Traduce tu vídeo y audio a más de 130 idiomas',
    'Transcripción automática de voz a texto',
    'Traducción automática por máquina',
    'Clonación de voz para 28 idiomas',
    'Soporte para subir archivos SRT',
    'Reescritor IA para controlar el habla rápida'
]

const business = [
    'Translate your video & audio into 130+ languages',
    'Automated speech-to-text transcription',
    'Automated machine translation',
    'Voice Cloning for 28 languages',
    'SRT upload support',
    'AI-rewriter to control fast speech'
]

const businessSpanish = [
    'Traduce tu vídeo y audio a más de 130 idiomas',
    'Transcripción automática de voz a texto',
    'Traducción automática por máquina',
    'Clonación de voz para 28 idiomas',
    'Soporte para subir archivos SRT',
    'Reescritor IA para controlar el habla rápida'
]

const custom = [
    'All Business features are included',
    'Custom price for minutes',
    'Business contract and invoicing',
    'API access',
    'Personal Customer Manager',
]

const customSpanish = [
    'Todas las funciones empresariales están incluidas',
    'Precio personalizado por minutos',
    'Contrato empresarial y facturación',
    'Acceso a la API',
    'Gerente de Cliente Personal',
]

const basicDescr = "For beginner individuals who want to start translating videos"
const basicDescrSpanish = "Para individuos principiantes que quieren empezar a traducir videos."
const proDescr = "For individuals and professionals who grow in new markets"
const proDescrSpanish = "Para individuos y profesionales que crecen en nuevos mercados"
const businessDescr = "For businesses actively scaling global content distribution"
const businessDescrSpanish = "Para empresas que están escalando activamente la distribución de contenido global."
const customDescr = "For enterprises with specific needs and large volume"
const customDescrSpanish = "Para empresas con necesidades específicas y gran volumen."


const PriceSection = (props) => {

  const isSmallScreen = useMediaQuery('(max-width:900px)')
  const isMobileScreen = useMediaQuery('(max-width:750px)')
  const isXMobileScreen = useMediaQuery('(max-width:600px)')
  const isTabletScreen = useMediaQuery('(max-width:800px)')
  
   
  const [plan, setPlan] = React.useState('month')
  const [BPrice, setBPrice] = React.useState(30)
  const [PPrice, setPPrice] = React.useState(70)
  const [BsPrice, setBsPrice] = React.useState(280)
  const [EPrice, setEPrice] = React.useState('Enterprise')    

  React.useEffect(() => {
    if (props.lang === "ESP") {
        setEPrice('Empresa')
    } else {
        setEPrice('Enterprise')
    }
  }, [])

  return (
    <Box sx={{
        mt: 5,
        px: isTabletScreen ? (isXMobileScreen ? 10 : 5) : 10,
        py: 10,
        borderTop: '2px solid #e1e1e1',
        background: '#fff',
    }}>

        <Box sx={{
            mb: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {
                props.lang && props.lang === "ENG" ? (

                    <Stack direction="column"  spacing={2}> 
                        <Typography 
                            variant={isSmallScreen ? (isMobileScreen ? "h4" : "h3") : "h2"}
                            sx={{
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Choose Your Pricing Plan
                        </Typography>

                        <Typography 
                            variant="h6"
                            sx={{
                                textAlign: 'center', 
                                fontFamily: 'Nunito Sans',
                            }}
                            >
                            All plans FREE for the first 30 days
                        </Typography>  
                    </Stack>

                ) : (

                    <Stack direction="column"  spacing={2}> 
                        <Typography 
                            variant="h2"
                            sx={{
                                textAlign: 'center', 
                                fontFamily: 'Catamaran',
                                background: 'linear-gradient(45deg, #2786d7, #5df9fd)',
                                color: 'transparent',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                            }}
                        >
                            Elija su plan de precios
                        </Typography>

                        <Typography 
                        variant="h6"
                        sx={{
                            textAlign: 'center', 
                            fontFamily: 'Nunito Sans',
                        }}
                        >
                            Todos los planes GRATIS durante los primeros 30 días
                        </Typography>  
                    </Stack>

                )
            }
        </Box>

        <Box sx={{
            mb: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CardSwitch setPlan={setPlan} setBPrice={setBPrice} setPPrice={setPPrice} setBsPrice={setBsPrice} setEPrice={setEPrice} lang={props.lang} />
        </Box>

        <Grid container spacing={1} sx={{ alignItems: "stretch" }}>

          <Grid item xs={12} sm={6} lg={3} >
            {
                props.lang && props.lang === "ENG" ? (

                    <PriceCard title="Basic" price={BPrice} plan={basic} time={plan} lang={props.lang} descr={basicDescr} includes="Included: 25 min" extra="Extra: $ 1" />

                ) : (

                    <PriceCard title="Básico" price={BPrice} plan={basicSpanish} time={plan} lang={props.lang} descr={basicDescrSpanish} includes="Incluido: 25 min" extra="Extra: $ 1" />

                )
            } 
          </Grid>

          <Grid item xs={12} sm={6} lg={3} >
          {
                props.lang && props.lang === "ENG" ? (
                    <PriceCard title="Pro" price={PPrice} plan={pro} time={plan} lang={props.lang} descr={proDescr} includes="Included: 100 min" extra="Extra: $ 0.75" />
                ) : (
                    <PriceCard title="Pro" price={PPrice} plan={proSpanish} time={plan} lang={props.lang} descr={proDescrSpanish} includes="Incluido: 100 min" extra="Extra: $ 0.75" />
                )
            }
          </Grid>

          <Grid item xs={12} sm={6} lg={3} >
          {
                props.lang && props.lang === "ENG" ? (
                    <PriceCard title="Business" price={BsPrice} plan={business} time={plan} lang={props.lang} descr={businessDescr} includes="Included: 500 min" extra="Extra: $ 0.5" />
                ) : (
                    <PriceCard title="Negocio" price={BsPrice} plan={businessSpanish} time={plan} lang={props.lang} descr={businessDescrSpanish} includes="Incluido: 500 min" extra="Extra: $ 0.5" />
                )
            }
          </Grid>

          <Grid item xs={12} sm={6} lg={3} >
          {
                props.lang && props.lang === "ENG" ? (
                    <PriceCard title="Custom" price={EPrice} plan={custom} time={plan} lang={props.lang} descr={customDescr} special={true} includes="From 3000 min" extra="Custom price" />
                ) : (
                    <PriceCard title="Costumbre" price={EPrice} plan={customSpanish} time={plan} lang={props.lang} descr={customDescrSpanish} special={true} includes="Desde 3000 minutos" extra="Precio personalizado" />
                )
            }
          </Grid>

        </Grid>
    </Box>
  )
}

export default PriceSection