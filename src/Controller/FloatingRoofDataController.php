<?php

namespace App\Controller;

use App\Entity\TankGeometryData;
use App\Form\TankGeometryDataType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FloatingRoofDataController extends AbstractController
{
    #[Route('/floating/roof/data', name: 'app_floating_roof_data')]
    public function index(Request $request): Response
    {
        $tankGeometryData=new TankGeometryData();
        $form= $this->createForm(TankGeometryDataType::class,$tankGeometryData);
        $form->handleRequest($request);
        $tankGeometryData->setId(30);
        $form->handleRequest($request);



        /*
                    {
                         $tankGeometryData->setInsideDiameterDiCorroded($request->query->get("InsideDiameterDiCorroded"));
                         $tankGeometryData->setTankHeight($request->query->get("tankHeight"));
                         $tankGeometryData->setMaterialOfConstruction($request->query->get("materialOfConstruction"));
                         $tankGeometryData->setSpecificMinimumYieldStress($request->query->get("specificMinimumYieldStress"));
                         $tankGeometryData->setModulusOfElasticity($request->query->get("modulusOfElasticity"));
                         $tankGeometryData->setDensityOfMaterial($request->query->get("densityOfMaterial"));
                         $tankGeometryData->setCorrosionAllowance($request->query->get("corrosionAllowance"));
                         $tankGeometryData->setMinSpecificGravityOfProduct($request->query->get("minSpecificGravityOfProduct"));
                         $tankGeometryData->setMaxSpecificGravityOfProduct($request->query->get("maxSpecificGravityOfProduct"));
                         $tankGeometryData->setRoofLiveLoad($request->query->get("roofLiveLoad"));
                         $tankGeometryData->setOuterRimHeight($request->query->get("outerRimHeight"));
                         $tankGeometryData->setInnerRimHeight($request->query->get("innerRimHeight"));
                         $tankGeometryData->setPontoonWidth($request->query->get("pontoonWidth"));
                         $tankGeometryData->setRimGap($request->query->get("rimGap"));
                         $tankGeometryData->setOuterRimExtendAbovePontoon($request->query->get("outerRimExtendAbovePontoon"));
                         $tankGeometryData->setNoOfPontoons($request->query->get("noOfPontoons"));
                         $tankGeometryData->setOuterRimDiameter($request->query->get("outerRimDiameter"));
                         $tankGeometryData->setInnerRimDiameter($request->query->get("innerRimDiameter"));
                         $tankGeometryData->setBoh($request->query->get("Boh"));
                         $tankGeometryData->setBih($request->query->get("Bih"));
                         $tankGeometryData->setWb($request->query->get("wb"));
                         $tankGeometryData->setTor($request->query->get("tor"));
                         $tankGeometryData->setTir($request->query->get("tir"));
                         $tankGeometryData->setTtp($request->query->get("ttp"));
                         $tankGeometryData->setTbp($request->query->get("tbp"));
                         $tankGeometryData->setTb($request->query->get("tb"));
                         $tankGeometryData->setTd($request->query->get("td"));
                         $tankGeometryData->setCircumferentialTrussPlates($request->query->get("circumferentialTrussPlates"));
                         dump($tankGeometryData);
                         die;

                     }*/



        return $this->render('floating_roof_data/multi-steps.html.twig', [

        ]);
    }
}
