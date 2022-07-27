<?php

namespace App\Form;

use App\Entity\TankGeometryData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class TankGeometryDataType extends AbstractType
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
            ->add('rafter')
            ->add('rafterNos')
            ->add('rafterWeight')
            ->add('Np')
            ->add('Pls')
            ->add('PlsSch')
            ->add('PlsWeight')
            ->add('Plh')
            ->add('PlhSch')
            ->add('PlhWeight')
            ->add('Pll')
            ->add('Plhl')
            ->add('Nd')
            ->add('Dls')
            ->add('Dlh')
            ->add('DlsSch')
            ->add('DlhSch')
            ->add('DlsWeight')
            ->add('DlhWeight')
            ->add('Dll')
            ->add('Dlhl')
            ->add('tpw')
            ->add('bpw')
            ->add('irw')
            ->add('orw')
            ->add('bw')
            ->add('dpw')
            ->add('plw')
            ->add('plhw')
            ->add('dlw')
            ->add('dlhw')
            ->add('paw')
            ->add('daw')
            ->add('rw')
            ->add('pw')
            ->add('wp')
            ->add('wd')
            ->add('wr')
            ->add('h1')
            ->add('h2')
            ->add('h3')
            ->add('v1')
            ->add('v2')
            ->add('v3')
            ->add('tp')
            ->add('vol')
            ->add('posts')
            ->add('postsNos')
            ->add('postsWeight')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TankGeometryData::class,
        ]);
    }
}
