<?php

namespace App\Entity;

use App\Repository\TankGeometryDataRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TankGeometryDataRepository::class)]
class TankGeometryData
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    #[ORM\Column(type: 'float')]
    private $InsideDiameterDiCorroded;

    #[ORM\Column(type: 'float')]
    private $tankHeight;

    #[ORM\Column(type: 'string', length: 255)]
    private $materialOfConstruction;

    #[ORM\Column(type: 'float')]
    private $specificMinimumYieldStress;

    #[ORM\Column(type: 'float')]
    private $modulusOfElasticity;

    #[ORM\Column(type: 'float')]
    private $densityOfMaterial;

    #[ORM\Column(type: 'float')]
    private $corrosionAllowance;

    #[ORM\Column(type: 'float')]
    private $minSpecificGravityOfProduct;

    #[ORM\Column(type: 'float')]
    private $maxSpecificGravityOfProduct;

    #[ORM\Column(type: 'float')]
    private $roofLiveLoad;

    #[ORM\Column(type: 'float')]
    private $outerRimHeight;

    #[ORM\Column(type: 'float')]
    private $innerRimHeight;

    #[ORM\Column(type: 'float')]
    private $pontoonWidth;

    #[ORM\Column(type: 'float')]
    private $rimGap;

    #[ORM\Column(type: 'float')]
    private $outerRimExtendAbovePontoon;

    #[ORM\Column(type: 'float')]
    private $noOfPontoons;

    #[ORM\Column(type: 'float')]
    private $outerRimDiameter;

    #[ORM\Column(type: 'float')]
    private $innerRimDiameter;

    #[ORM\Column(type: 'float')]
    private $Boh;

    #[ORM\Column(type: 'float')]
    private $Bih;

    #[ORM\Column(type: 'float')]
    private $wb;

    #[ORM\Column(type: 'float')]
    private $tor;

    #[ORM\Column(type: 'float')]
    private $tir;

    #[ORM\Column(type: 'float')]
    private $ttp;

    #[ORM\Column(type: 'float')]
    private $tbp;

    #[ORM\Column(type: 'float')]
    private $tb;

    #[ORM\Column(type: 'float')]
    private $td;

    #[ORM\Column(type: 'float')]
    private $circumferentialTrussPlates;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rafter;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rafterNos;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rafterWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Np;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Pls;

    #[ORM\Column(type: 'float', nullable: true)]
    private $PlsSch;

    #[ORM\Column(type: 'float', nullable: true)]
    private $PlsWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Plh;

    #[ORM\Column(type: 'float', nullable: true)]
    private $PlhSch;

    #[ORM\Column(type: 'float', nullable: true)]
    private $PlhWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Pll;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Plhl;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $Nd;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Dls;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Dlh;

    #[ORM\Column(type: 'float', nullable: true)]
    private $DlsSch;

    #[ORM\Column(type: 'float', nullable: true)]
    private $DlhSch;

    #[ORM\Column(type: 'float', nullable: true)]
    private $DlsWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $DlhWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Dll;

    #[ORM\Column(type: 'float', nullable: true)]
    private $Dlhl;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tpw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $bpw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $irw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $orw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $bw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dpw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $plw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $plhw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dlw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dlhw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $paw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $daw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $rw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $wp;

    #[ORM\Column(type: 'float', nullable: true)]
    private $wd;

    #[ORM\Column(type: 'float', nullable: true)]
    private $wr;

    #[ORM\Column(type: 'float', nullable: true)]
    private $h1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $h2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $h3;

    #[ORM\Column(type: 'float', nullable: true)]
    private $v1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $v2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $v3;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tp;

    #[ORM\Column(type: 'float', nullable: true)]
    private $vol;

    #[ORM\Column(type: 'float', nullable: true)]
    private $posts;

    #[ORM\Column(type: 'float', nullable: true)]
    private $postsNos;

    #[ORM\Column(type: 'float', nullable: true)]
    private $postsWeight;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tde;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dd;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pdv;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dp;

    #[ORM\Column(type: 'float', nullable: true)]
    private $dlh2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $v12;

    #[ORM\Column(type: 'float', nullable: true)]
    private $va;

    #[ORM\Column(type: 'float', nullable: true)]
    private $vr;

    #[ORM\Column(type: 'float', nullable: true)]
    private $d12;

    #[ORM\Column(type: 'float', nullable: true)]
    private $hrain;

    #[ORM\Column(type: 'float', nullable: true)]
    private $adeck;

    #[ORM\Column(type: 'float', nullable: true)]
    private $vrain;

    #[ORM\Column(type: 'float', nullable: true)]
    private $vdisplacement;

    #[ORM\Column(type: 'float', nullable: true)]
    private $hrain2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $t;

    #[ORM\Column(type: 'float', nullable: true)]
    private $alpha;

    #[ORM\Column(type: 'float', nullable: true)]
    private $q1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pr;

    #[ORM\Column(type: 'float', nullable: true)]
    private $e;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k1;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k2;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k31;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k41;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k32;

    #[ORM\Column(type: 'float', nullable: true)]
    private $k42;

    #[ORM\Column(type: 'float', nullable: true)]
    private $piw;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pdir;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ptir;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ptor;

    #[ORM\Column(type: 'float', nullable: true)]
    private $pttp;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ptbp;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tpsa;

    #[ORM\Column(type: 'float', nullable: true)]
    private $ba;

    #[ORM\Column(type: 'float', nullable: true)]
    private $tpl;

    #[ORM\Column(type: 'float', nullable: true)]
    private $bpl;

    #[ORM\Column(type: 'float', nullable: true)]
    private $horwep;

    #[ORM\Column(type: 'float', nullable: true)]
    private $phir;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getInsideDiameterDiCorroded(): ?float
    {
        return $this->InsideDiameterDiCorroded;
    }

    public function setInsideDiameterDiCorroded(?float $InsideDiameterDiCorroded): self
    {
        $this->InsideDiameterDiCorroded = $InsideDiameterDiCorroded;

        return $this;
    }

    public function getTankHeight(): ?float
    {
        return $this->tankHeight;
    }

    public function setTankHeight(?float $tankHeight): self
    {
        $this->tankHeight = $tankHeight;

        return $this;
    }

    public function getMaterialOfConstruction(): ?string
    {
        return $this->materialOfConstruction;
    }

    public function setMaterialOfConstruction(?string $materialOfConstruction): self
    {
        $this->materialOfConstruction = $materialOfConstruction;

        return $this;
    }

    public function getSpecificMinimumYieldStress(): ?float
    {
        return $this->specificMinimumYieldStress;
    }

    public function setSpecificMinimumYieldStress(?float $specificMinimumYieldStress): self
    {
        $this->specificMinimumYieldStress = $specificMinimumYieldStress;

        return $this;
    }

    public function getModulusOfElasticity(): ?float
    {
        return $this->modulusOfElasticity;
    }

    public function setModulusOfElasticity(?float $modulusOfElasticity): self
    {
        $this->modulusOfElasticity = $modulusOfElasticity;

        return $this;
    }

    public function getDensityOfMaterial(): ?float
    {
        return $this->densityOfMaterial;
    }

    public function setDensityOfMaterial(?float $densityOfMaterial): self
    {
        $this->densityOfMaterial = $densityOfMaterial;

        return $this;
    }

    public function getCorrosionAllowance(): ?float
    {
        return $this->corrosionAllowance;
    }

    public function setCorrosionAllowance(?float $corrosionAllowance): self
    {
        $this->corrosionAllowance = $corrosionAllowance;

        return $this;
    }

    public function getMinSpecificGravityOfProduct(): ?float
    {
        return $this->minSpecificGravityOfProduct;
    }

    public function setMinSpecificGravityOfProduct(?float $minSpecificGravityOfProduct): self
    {
        $this->minSpecificGravityOfProduct = $minSpecificGravityOfProduct;

        return $this;
    }

    public function getMaxSpecificGravityOfProduct(): ?float
    {
        return $this->maxSpecificGravityOfProduct;
    }

    public function setMaxSpecificGravityOfProduct(?float $maxSpecificGravityOfProduct): self
    {
        $this->maxSpecificGravityOfProduct = $maxSpecificGravityOfProduct;

        return $this;
    }

    public function getRoofLiveLoad(): ?float
    {
        return $this->roofLiveLoad;
    }

    public function setRoofLiveLoad(?float $roofLiveLoad): self
    {
        $this->roofLiveLoad = $roofLiveLoad;

        return $this;
    }

    public function getOuterRimHeight(): ?float
    {
        return $this->outerRimHeight;
    }

    public function setOuterRimHeight(float $outerRimHeight): self
    {
        $this->outerRimHeight = $outerRimHeight;

        return $this;
    }

    public function getInnerRimHeight(): ?float
    {
        return $this->innerRimHeight;
    }

    public function setInnerRimHeight(float $innerRimHeight): self
    {
        $this->innerRimHeight = $innerRimHeight;

        return $this;
    }

    public function getPontoonWidth(): ?float
    {
        return $this->pontoonWidth;
    }

    public function setPontoonWidth(float $pontoonWidth): self
    {
        $this->pontoonWidth = $pontoonWidth;

        return $this;
    }

    public function getRimGap(): ?float
    {
        return $this->rimGap;
    }

    public function setRimGap(float $rimGap): self
    {
        $this->rimGap = $rimGap;

        return $this;
    }

    public function getOuterRimExtendAbovePontoon(): ?float
    {
        return $this->outerRimExtendAbovePontoon;
    }

    public function setOuterRimExtendAbovePontoon(float $outerRimExtendAbovePontoon): self
    {
        $this->outerRimExtendAbovePontoon = $outerRimExtendAbovePontoon;

        return $this;
    }

    public function getNoOfPontoons(): ?float
    {
        return $this->noOfPontoons;
    }

    public function setNoOfPontoons(float $noOfPontoons): self
    {
        $this->noOfPontoons = $noOfPontoons;

        return $this;
    }

    public function getOuterRimDiameter(): ?float
    {
        return $this->outerRimDiameter;
    }

    public function setOuterRimDiameter(float $outerRimDiameter): self
    {
        $this->outerRimDiameter = $outerRimDiameter;

        return $this;
    }

    public function getInnerRimDiameter(): ?float
    {
        return $this->innerRimDiameter;
    }

    public function setInnerRimDiameter(float $innerRimDiameter): self
    {
        $this->innerRimDiameter = $innerRimDiameter;

        return $this;
    }

    public function getBoh(): ?float
    {
        return $this->Boh;
    }

    public function setBoh(float $Boh): self
    {
        $this->Boh = $Boh;

        return $this;
    }

    public function getBih(): ?float
    {
        return $this->Bih;
    }

    public function setBih(float $Bih): self
    {
        $this->Bih = $Bih;

        return $this;
    }

    public function getWb(): ?float
    {
        return $this->wb;
    }

    public function setWb(float $wb): self
    {
        $this->wb = $wb;

        return $this;
    }

    public function getTor(): ?float
    {
        return $this->tor;
    }

    public function setTor(float $tor): self
    {
        $this->tor = $tor;

        return $this;
    }

    public function getTir(): ?float
    {
        return $this->tir;
    }

    public function setTir(float $tir): self
    {
        $this->tir = $tir;

        return $this;
    }

    public function getTtp(): ?float
    {
        return $this->ttp;
    }

    public function setTtp(float $ttp): self
    {
        $this->ttp = $ttp;

        return $this;
    }

    public function getTbp(): ?float
    {
        return $this->tbp;
    }

    public function setTbp(float $tbp): self
    {
        $this->tbp = $tbp;

        return $this;
    }

    public function getTb(): ?float
    {
        return $this->tb;
    }

    public function setTb(float $tb): self
    {
        $this->tb = $tb;

        return $this;
    }

    public function getTd(): ?float
    {
        return $this->td;
    }

    public function setTd(float $td): self
    {
        $this->td = $td;

        return $this;
    }

    public function getCircumferentialTrussPlates(): ?float
    {
        return $this->circumferentialTrussPlates;
    }

    public function setCircumferentialTrussPlates(float $circumferentialTrussPlates): self
    {
        $this->circumferentialTrussPlates = $circumferentialTrussPlates;

        return $this;
    }

    public function getRafter(): ?float
    {
        return $this->rafter;
    }

    public function setRafter(?float $rafter): self
    {
        $this->rafter = $rafter;

        return $this;
    }

    public function getRafterNos(): ?float
    {
        return $this->rafterNos;
    }

    public function setRafterNos(?float $rafterNos): self
    {
        $this->rafterNos = $rafterNos;

        return $this;
    }

    public function getRafterWeight(): ?float
    {
        return $this->rafterWeight;
    }

    public function setRafterWeight(?float $rafterWeight): self
    {
        $this->rafterWeight = $rafterWeight;

        return $this;
    }

    public function getNp(): ?float
    {
        return $this->Np;
    }

    public function setNp(?float $Np): self
    {
        $this->Np = $Np;

        return $this;
    }

    public function getPls(): ?float
    {
        return $this->Pls;
    }

    public function setPls(?float $Pls): self
    {
        $this->Pls = $Pls;

        return $this;
    }

    public function getPlsSch(): ?float
    {
        return $this->PlsSch;
    }

    public function setPlsSch(?float $PlsSch): self
    {
        $this->PlsSch = $PlsSch;

        return $this;
    }

    public function getPlsWeight(): ?float
    {
        return $this->PlsWeight;
    }

    public function setPlsWeight(?float $PlsWeight): self
    {
        $this->PlsWeight = $PlsWeight;

        return $this;
    }

    public function getPlh(): ?float
    {
        return $this->Plh;
    }

    public function setPlh(?float $Plh): self
    {
        $this->Plh = $Plh;

        return $this;
    }

    public function getPlhSch(): ?float
    {
        return $this->PlhSch;
    }

    public function setPlhSch(?float $PlhSch): self
    {
        $this->PlhSch = $PlhSch;

        return $this;
    }

    public function getPlhWeight(): ?float
    {
        return $this->PlhWeight;
    }

    public function setPlhWeight(?float $PlhWeight): self
    {
        $this->PlhWeight = $PlhWeight;

        return $this;
    }

    public function getPll(): ?float
    {
        return $this->Pll;
    }

    public function setPll(?float $Pll): self
    {
        $this->Pll = $Pll;

        return $this;
    }

    public function getPlhl(): ?float
    {
        return $this->Plhl;
    }

    public function setPlhl(?float $Plhl): self
    {
        $this->Plhl = $Plhl;

        return $this;
    }

    public function getNd(): ?int
    {
        return $this->Nd;
    }

    public function setNd(?int $Nd): self
    {
        $this->Nd = $Nd;

        return $this;
    }

    public function getDls(): ?float
    {
        return $this->Dls;
    }

    public function setDls(?float $Dls): self
    {
        $this->Dls = $Dls;

        return $this;
    }

    public function getDlh(): ?float
    {
        return $this->Dlh;
    }

    public function setDlh(?float $Dlh): self
    {
        $this->Dlh = $Dlh;

        return $this;
    }

    public function getDlsSch(): ?float
    {
        return $this->DlsSch;
    }

    public function setDlsSch(?float $DlsSch): self
    {
        $this->DlsSch = $DlsSch;

        return $this;
    }

    public function getDlhSch(): ?float
    {
        return $this->DlhSch;
    }

    public function setDlhSch(?float $DlhSch): self
    {
        $this->DlhSch = $DlhSch;

        return $this;
    }

    public function getDlsWeight(): ?float
    {
        return $this->DlsWeight;
    }

    public function setDlsWeight(?float $DlsWeight): self
    {
        $this->DlsWeight = $DlsWeight;

        return $this;
    }

    public function getDlhWeight(): ?float
    {
        return $this->DlhWeight;
    }

    public function setDlhWeight(?float $DlhWeight): self
    {
        $this->DlhWeight = $DlhWeight;

        return $this;
    }

    public function getDll(): ?float
    {
        return $this->Dll;
    }

    public function setDll(?float $Dll): self
    {
        $this->Dll = $Dll;

        return $this;
    }

    public function getDlhl(): ?float
    {
        return $this->Dlhl;
    }

    public function setDlhl(?float $Dlhl): self
    {
        $this->Dlhl = $Dlhl;

        return $this;
    }

    public function getTpw(): ?float
    {
        return $this->tpw;
    }

    public function setTpw(?float $tpw): self
    {
        $this->tpw = $tpw;

        return $this;
    }

    public function getBpw(): ?float
    {
        return $this->bpw;
    }

    public function setBpw(?float $bpw): self
    {
        $this->bpw = $bpw;

        return $this;
    }

    public function getIrw(): ?float
    {
        return $this->irw;
    }

    public function setIrw(?float $irw): self
    {
        $this->irw = $irw;

        return $this;
    }

    public function getOrw(): ?float
    {
        return $this->orw;
    }

    public function setOrw(?float $orw): self
    {
        $this->orw = $orw;

        return $this;
    }

    public function getBw(): ?float
    {
        return $this->bw;
    }

    public function setBw(?float $bw): self
    {
        $this->bw = $bw;

        return $this;
    }

    public function getDpw(): ?float
    {
        return $this->dpw;
    }

    public function setDpw(?float $dpw): self
    {
        $this->dpw = $dpw;

        return $this;
    }

    public function getPlw(): ?float
    {
        return $this->plw;
    }

    public function setPlw(?float $plw): self
    {
        $this->plw = $plw;

        return $this;
    }

    public function getPlhw(): ?float
    {
        return $this->plhw;
    }

    public function setPlhw(?float $plhw): self
    {
        $this->plhw = $plhw;

        return $this;
    }

    public function getDlw(): ?float
    {
        return $this->dlw;
    }

    public function setDlw(?float $dlw): self
    {
        $this->dlw = $dlw;

        return $this;
    }

    public function getDlhw(): ?float
    {
        return $this->dlhw;
    }

    public function setDlhw(?float $dlhw): self
    {
        $this->dlhw = $dlhw;

        return $this;
    }

    public function getPaw(): ?float
    {
        return $this->paw;
    }

    public function setPaw(?float $paw): self
    {
        $this->paw = $paw;

        return $this;
    }

    public function getDaw(): ?float
    {
        return $this->daw;
    }

    public function setDaw(?float $daw): self
    {
        $this->daw = $daw;

        return $this;
    }

    public function getRw(): ?float
    {
        return $this->rw;
    }

    public function setRw(?float $rw): self
    {
        $this->rw = $rw;

        return $this;
    }

    public function getPw(): ?float
    {
        return $this->pw;
    }

    public function setPw(?float $pw): self
    {
        $this->pw = $pw;

        return $this;
    }

    public function getWp(): ?float
    {
        return $this->wp;
    }

    public function setWp(?float $wp): self
    {
        $this->wp = $wp;

        return $this;
    }

    public function getWd(): ?float
    {
        return $this->wd;
    }

    public function setWd(?float $wd): self
    {
        $this->wd = $wd;

        return $this;
    }

    public function getWr(): ?float
    {
        return $this->wr;
    }

    public function setWr(?float $wr): self
    {
        $this->wr = $wr;

        return $this;
    }

    public function getH1(): ?float
    {
        return $this->h1;
    }

    public function setH1(?float $h1): self
    {
        $this->h1 = $h1;

        return $this;
    }

    public function getH2(): ?float
    {
        return $this->h2;
    }

    public function setH2(?float $h2): self
    {
        $this->h2 = $h2;

        return $this;
    }

    public function getH3(): ?float
    {
        return $this->h3;
    }

    public function setH3(?float $h3): self
    {
        $this->h3 = $h3;

        return $this;
    }

    public function getV1(): ?float
    {
        return $this->v1;
    }

    public function setV1(?float $v1): self
    {
        $this->v1 = $v1;

        return $this;
    }

    public function getV2(): ?float
    {
        return $this->v2;
    }

    public function setV2(?float $v2): self
    {
        $this->v2 = $v2;

        return $this;
    }

    public function getV3(): ?float
    {
        return $this->v3;
    }

    public function setV3(?float $v3): self
    {
        $this->v3 = $v3;

        return $this;
    }

    public function getTp(): ?float
    {
        return $this->tp;
    }

    public function setTp(?float $tp): self
    {
        $this->tp = $tp;

        return $this;
    }

    public function getVol(): ?float
    {
        return $this->vol;
    }

    public function setVol(?float $vol): self
    {
        $this->vol = $vol;

        return $this;
    }

    public function getPosts(): ?float
    {
        return $this->posts;
    }

    public function setPosts(?float $posts): self
    {
        $this->posts = $posts;

        return $this;
    }

    public function getPostsNos(): ?float
    {
        return $this->postsNos;
    }

    public function setPostsNos(?float $postsNos): self
    {
        $this->postsNos = $postsNos;

        return $this;
    }

    public function getPostsWeight(): ?float
    {
        return $this->postsWeight;
    }

    public function setPostsWeight(?float $postsWeight): self
    {
        $this->postsWeight = $postsWeight;

        return $this;
    }

    public function getTde(): ?float
    {
        return $this->tde;
    }

    public function setTde(?float $tde): self
    {
        $this->tde = $tde;

        return $this;
    }

    public function getDd(): ?float
    {
        return $this->dd;
    }

    public function setDd(?float $dd): self
    {
        $this->dd = $dd;

        return $this;
    }

    public function getPdv(): ?float
    {
        return $this->pdv;
    }

    public function setPdv(?float $pdv): self
    {
        $this->pdv = $pdv;

        return $this;
    }

    public function getDp(): ?float
    {
        return $this->dp;
    }

    public function setDp(?float $dp): self
    {
        $this->dp = $dp;

        return $this;
    }

    public function getDlh2(): ?float
    {
        return $this->dlh2;
    }

    public function setDlh2(?float $dlh2): self
    {
        $this->dlh2 = $dlh2;

        return $this;
    }

    public function getV12(): ?float
    {
        return $this->v12;
    }

    public function setV12(?float $v12): self
    {
        $this->v12 = $v12;

        return $this;
    }

    public function getVa(): ?float
    {
        return $this->va;
    }

    public function setVa(?float $va): self
    {
        $this->va = $va;

        return $this;
    }

    public function getVr(): ?float
    {
        return $this->vr;
    }

    public function setVr(?float $vr): self
    {
        $this->vr = $vr;

        return $this;
    }

    public function getD12(): ?float
    {
        return $this->d12;
    }

    public function setD12(?float $d12): self
    {
        $this->d12 = $d12;

        return $this;
    }

    public function getHrain(): ?float
    {
        return $this->hrain;
    }

    public function setHrain(?float $hrain): self
    {
        $this->hrain = $hrain;

        return $this;
    }

    public function getAdeck(): ?float
    {
        return $this->adeck;
    }

    public function setAdeck(?float $adeck): self
    {
        $this->adeck = $adeck;

        return $this;
    }

    public function getVrain(): ?float
    {
        return $this->vrain;
    }

    public function setVrain(?float $vrain): self
    {
        $this->vrain = $vrain;

        return $this;
    }

    public function getVdisplacement(): ?float
    {
        return $this->vdisplacement;
    }

    public function setVdisplacement(?float $vdisplacement): self
    {
        $this->vdisplacement = $vdisplacement;

        return $this;
    }

    public function getHrain2(): ?float
    {
        return $this->hrain2;
    }

    public function setHrain2(?float $hrain2): self
    {
        $this->hrain2 = $hrain2;

        return $this;
    }

    public function getT(): ?float
    {
        return $this->t;
    }

    public function setT(?float $t): self
    {
        $this->t = $t;

        return $this;
    }

    public function getAlpha(): ?float
    {
        return $this->alpha;
    }

    public function setAlpha(?float $alpha): self
    {
        $this->alpha = $alpha;

        return $this;
    }

    public function getQ1(): ?float
    {
        return $this->q1;
    }

    public function setQ1(?float $q1): self
    {
        $this->q1 = $q1;

        return $this;
    }

    public function getPr(): ?float
    {
        return $this->pr;
    }

    public function setPr(?float $pr): self
    {
        $this->pr = $pr;

        return $this;
    }

    public function getE(): ?float
    {
        return $this->e;
    }

    public function setE(?float $e): self
    {
        $this->e = $e;

        return $this;
    }

    public function getK1(): ?float
    {
        return $this->k1;
    }

    public function setK1(?float $k1): self
    {
        $this->k1 = $k1;

        return $this;
    }

    public function getK2(): ?float
    {
        return $this->k2;
    }

    public function setK2(?float $k2): self
    {
        $this->k2 = $k2;

        return $this;
    }

    public function getK31(): ?float
    {
        return $this->k31;
    }

    public function setK31(?float $k31): self
    {
        $this->k31 = $k31;

        return $this;
    }

    public function getK41(): ?float
    {
        return $this->k41;
    }

    public function setK41(?float $k41): self
    {
        $this->k41 = $k41;

        return $this;
    }

    public function getK32(): ?float
    {
        return $this->k32;
    }

    public function setK32(?float $k32): self
    {
        $this->k32 = $k32;

        return $this;
    }

    public function getK42(): ?float
    {
        return $this->k42;
    }

    public function setK42(?float $k42): self
    {
        $this->k42 = $k42;

        return $this;
    }

    public function getPiw(): ?float
    {
        return $this->piw;
    }

    public function setPiw(?float $piw): self
    {
        $this->piw = $piw;

        return $this;
    }

    public function getPdir(): ?float
    {
        return $this->pdir;
    }

    public function setPdir(?float $pdir): self
    {
        $this->pdir = $pdir;

        return $this;
    }

    public function getPtir(): ?float
    {
        return $this->ptir;
    }

    public function setPtir(?float $ptir): self
    {
        $this->ptir = $ptir;

        return $this;
    }

    public function getPtor(): ?float
    {
        return $this->ptor;
    }

    public function setPtor(?float $ptor): self
    {
        $this->ptor = $ptor;

        return $this;
    }

    public function getPttp(): ?float
    {
        return $this->pttp;
    }

    public function setPttp(?float $pttp): self
    {
        $this->pttp = $pttp;

        return $this;
    }

    public function getPtbp(): ?float
    {
        return $this->ptbp;
    }

    public function setPtbp(?float $ptbp): self
    {
        $this->ptbp = $ptbp;

        return $this;
    }

    public function getTpsa(): ?float
    {
        return $this->tpsa;
    }

    public function setTpsa(?float $tpsa): self
    {
        $this->tpsa = $tpsa;

        return $this;
    }

    public function getBa(): ?float
    {
        return $this->ba;
    }

    public function setBa(?float $ba): self
    {
        $this->ba = $ba;

        return $this;
    }

    public function getTpl(): ?float
    {
        return $this->tpl;
    }

    public function setTpl(?float $tpl): self
    {
        $this->tpl = $tpl;

        return $this;
    }

    public function getBpl(): ?float
    {
        return $this->bpl;
    }

    public function setBpl(?float $bpl): self
    {
        $this->bpl = $bpl;

        return $this;
    }

    public function getHorwep(): ?float
    {
        return $this->horwep;
    }

    public function setHorwep(?float $horwep): self
    {
        $this->horwep = $horwep;

        return $this;
    }

    public function getPhir(): ?float
    {
        return $this->phir;
    }

    public function setPhir(?float $phir): self
    {
        $this->phir = $phir;

        return $this;
    }
}
