import useSWR from 'swr'
import { fetcher2 } from '../utils/defaults'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Layout } from '../components/Layout'
import { ContractorCard } from '../components/ContractorCard'
import { ContractorSelect } from '../components/ContractorSelect'


// const url = '/api/graphql'
const query = `{
    allContractors {
      companyName
      email
      logoImage
      imgFormat
    }
}
`

export default function Contractors() {
  const { data: companies, error, isValidating, mutate } = useSWR(query, fetcher2)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <Layout>
      <div>
        <p><b>REMOVA AS EMPRESAS QUE NÃO PARTICIPARÃO NA LICITAÇÃO</b></p>
        <ContractorSelect parentRef={{mutate}} ></ContractorSelect>
      </div>

      <div>{
        (companies) ?
        <Carousel responsive={responsive}>{ companies.data.allContractors.map(
            (contractor, index) => <ContractorCard contractor={contractor} />
        )}
        </Carousel> :
        <p>No contractors found</p>
      }
      </div>
    </Layout>
  )
}
