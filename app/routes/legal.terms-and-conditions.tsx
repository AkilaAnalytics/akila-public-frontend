import { Helmet } from 'react-helmet'

export default function TermsAndConditions() {
  return (
    <div className="m-10 rounded-md pt-10">
      <Helmet>
        <script src="https://app.termly.io/embed-policy.min.js" />
      </Helmet>
      <div
        name="termly-embed"
        data-id="42a6d74b-c8c2-4956-b82a-37fd34a74056"
        data-type="iframe"></div>
    </div>
  )
}
