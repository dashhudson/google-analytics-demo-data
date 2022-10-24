describe('Generate fake traffic', () => {

    beforeEach(() => {
        cy.clearCookies();
    })

    const utm_terms = [
        21414841,
        232932476,
        232935829,
        232935640,
        232935445,
        232935314,
        232934845,
        232931811,
        232931810,
        232931684,
        232931679,
        227546415,
        227546317,
        227544867,
        227544866,
        227544119,
        227544117,
        227527956,
        227527252,
        227527080,
        227527024,
        227527023,
        227526247,
        207687647,
        207677317,
        204713700,
        204499662,
        204499654,
        227540824,
        227542041,
        227542131,
        156216558,
        151595586,
        227542273,
        227541657,
        128147250,
        122747639,
        83400312,
        83399347,
        65510195,
        8118474,
        183698169,
        180486453,
        223985913,
        223974826,
        203000680,
        201940980,
        201934174,
        201934146,
        199333574,
        199237741,
        199237668,
        199237647,
        199237609,
        191887751,
        191864283,
        190619798,
        190619795,
        190619790,
        190126168,
        190125959,
        190125869,
        190016816,
        190016796,
        190016767,
        190016750,
        190016744,
        190016735,
        190016720,
        190016702,
        190016688,
        190008429,
        190008401,
        189987830,
        189987821,
        189987817,
        189987812,
        189987809,
        189987805,
        189987804,
        189895635,
        189879102,
        189877893,
        189866447,
        188324322,
        188303198,
        187362697,
        187362450,
        187362261,
        187362212,
        187362166,
        187362137,
        186883511,
        185403899,
        185403892,
        221443507,
        219884277,
        219884232,
        210178409,
        207801627,
        203475050,
        185578971,
        185405132,
        177384722,
        177277062,
        39206196,
        39144156,
        38703796,
        21014322,
        175950,
        175949,
        175918,
        175888,
        220037718,
        220145441,
        218457851,
        218455897,
        218453396,
        218437081,
        218287595,
        218237738,
        218227976,
        218227182,
        218226769,
        218226495,
        216255463,
        211594128,
        211586866,
        211582665,
        211582541,
        211510579,
        211510319,
        217304504,
        215567563,
        215563193,
        215557646,
        215557636,
        215556916,
        215478469,
        215463553,
        215453083,
        215697179,
        215941481,
        215872290,
        215865449,
        215857737,
        215792606,
        215786473,
        215785442,
        215785117,
        214860376,
        214764926,
        213679749,
        213497070,
        212624223,
        211684757,
        211490070,
        211308789,
        211308776,
        210506072,
        210400808,
        210027729,
        206999949,
        211282754,
        211282751,
        211260458,
        211257960,
        211249925,
        211212308,
        211198136,
        209256050,
        209626537,
        209089230,
        206938999,
        201877383,
        199362373,
        208840525,
        208840517,
        208385868,
        208111585,
        208613498,
        203472391,
        203001965,
        202406815
    ]

    // utm_terms.forEach(term => {
    //     it(`visits page with utm_term=${term}`, () => {
    //         cy.visit(`/?utm_source=likeshop_me&utm_medium=social&utm_campaign=Winter+sale&utm_term=${term}`)
    //     })
    //
    // })

    utm_terms.filter(term => term % 2 === 0 ? term : null).forEach(term => {
        it('visits page with utm_term= and make a purchase', () => {
                cy.visit(`/?utm_source=likeshop_me&utm_medium=social&utm_campaign=Winter+sale&utm_term=${term}`)
                cy.get('[data-cy="add-to-cart"]').click()
            }
        )
    })

})