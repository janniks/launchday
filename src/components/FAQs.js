import React from 'react'

import { Card, Collapse, Icon } from 'antd'

const { Panel } = Collapse

const customPanelStyle = {
  // background: '#f7f7f7',
  borderRadius: 4,
  // marginBottom: 24,
  border: 0,
  overflow: 'hidden'
}

const FAQs = () => {
  return (
    <div>
      <h3 style={{ marginTop: '32px' }}>
        FAQs <Icon type="question-circle" size="small" theme="filled" />
      </h3>
      <Card>
        <Collapse
          bordered={false}
          expandIcon={({ isActive }) => (
            <Icon size="small" type="caret-right" rotate={isActive ? 90 : 0} />
          )}
        >
          <Panel
            header="This is panel header 1"
            key="1"
            style={customPanelStyle}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si
              semel tristior effectus est, hilara vita amissa est? Si longus,
              levis; Gerendus est mos, modo recte sentiat. Audax negotium,
              dicerem impudens, nisi hoc institutum postea translatum ad
              philosophos nostros esset. Erat enim Polemonis. Quo studio
              Aristophanem putamus aetatem in litteris duxisse? Duo Reges:
              constructio interrete. Si enim, ut mihi quidem videtur, non explet
              bona naturae voluptas, iure praetermissa est; Inde sermone vario
              [redacted] illa a Dipylo stadia confecimus. Non igitur bene. Sed
              vobis voluptatum perceptarum recordatio vitam beatam facit, et
              quidem corpore perceptarum. Dempta enim aeternitate nihilo beatior
              Iuppiter quam Epicurus;
            </p>
          </Panel>
          <Panel
            header="This is panel header 2"
            key="2"
            style={customPanelStyle}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si
              semel tristior effectus est, hilara vita amissa est? Si longus,
              levis; Gerendus est mos, modo recte sentiat. Audax negotium,
              dicerem impudens, nisi hoc institutum postea translatum ad
              philosophos nostros esset. Erat enim Polemonis. Quo studio
              Aristophanem putamus aetatem in litteris duxisse? Duo Reges:
              constructio interrete. Si enim, ut mihi quidem videtur, non explet
              bona naturae voluptas, iure praetermissa est; Inde sermone vario
              [redacted] illa a Dipylo stadia confecimus. Non igitur bene. Sed
              vobis voluptatum perceptarum recordatio vitam beatam facit, et
              quidem corpore perceptarum. Dempta enim aeternitate nihilo beatior
              Iuppiter quam Epicurus;
            </p>
          </Panel>
          <Panel
            header="This is panel header 3"
            key="3"
            style={customPanelStyle}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si
              semel tristior effectus est, hilara vita amissa est? Si longus,
              levis; Gerendus est mos, modo recte sentiat. Audax negotium,
              dicerem impudens, nisi hoc institutum postea translatum ad
              philosophos nostros esset. Erat enim Polemonis. Quo studio
              Aristophanem putamus aetatem in litteris duxisse? Duo Reges:
              constructio interrete. Si enim, ut mihi quidem videtur, non explet
              bona naturae voluptas, iure praetermissa est; Inde sermone vario
              [redacted] illa a Dipylo stadia confecimus. Non igitur bene. Sed
              vobis voluptatum perceptarum recordatio vitam beatam facit, et
              quidem corpore perceptarum. Dempta enim aeternitate nihilo beatior
              Iuppiter quam Epicurus;
            </p>
          </Panel>
        </Collapse>
      </Card>
    </div>
  )
}

export default FAQs
