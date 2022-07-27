<?php

namespace App\Form;

use App\Entity\TankGeometryData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TankGeoType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('InsideDiameterDiCorroded')
            ->add('tankHeight')
            ->add('materialOfConstruction')
            ->add('specificMinimumYieldStress')
            ->add('modulusOfElasticity')
            ->add('densityOfMaterial')
            ->add('corrosionAllowance')
            ->add('minSpecificGravityOfProduct')
            ->add('maxSpecificGravityOfProduct')
            ->add('roofLiveLoad')
            ->add('outerRimHeight')
            ->add('innerRimHeight')
            ->add('pontoonWidth')
            ->add('rimGap')
            ->add('outerRimExtendAbovePontoon')
            ->add('noOfPontoons')
            ->add('outerRimDiameter')
            ->add('innerRimDiameter')
            ->add('Boh')
            ->add('Bih')
            ->add('wb')
            ->add('tor')
            ->add('tir')
            ->add('ttp')
            ->add('tbp')
            ->add('tb')
            ->add('td')
            ->add('circumferentialTrussPlates')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TankGeometryData::class,
        ]);
    }
}
